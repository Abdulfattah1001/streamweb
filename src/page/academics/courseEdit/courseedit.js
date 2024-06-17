import { Input, TextareaAutosize } from '@mui/material';
import '../../../styles/index/course.css'
import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, getDoc,doc} from 'firebase/firestore';
import { firestore, storage } from '../../../firebase.config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuid } from 'uuid';

const CourseCreation = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [modules, setModules] = useState([]);
  const [imgSrc, setImageSrc] = useState("");

  const getCourses = () =>{
    const collectRef = collection(firestore, "COURSES");

    getDocs(collectRef).then((data)=>{
        for(let courses of data.docs){
            getDocs(collection(firestore,`COURSES/${courses.id}/modules`)).then((dat)=>{
                console.log(dat.docs.at(0).data())
                for(let lesson of dat.docs){
                    getDocs(collection(firestore,`COURSES/${courses.id}/modules/${lesson.id}/lesson`)).then((less)=>{
                        for(let lesson01 of less.docs){
                            console.log("Course Name: ", courses.data().title);

                        console.log("Course Description: ", courses.data().description);
                        console.log("Course Thumbnail: ", courses.data().thumbnail);
                        console.log("Module title: ", lesson.data().title);
                        console.log("Lesson title: ", lesson01.data().title);
                        console.log("Lesson type: ", lesson01.data().type);
                        console.log("Lesson content: ", lesson01.data().content);
                        }
                    })
                }
            })
        }
    })
  }

  useEffect(function(){
    //getCourses();
  },[])

  let [courseThumbnail, setThumbnail] = useState();

  const addModule = () => {
    setModules([...modules, { title: '', lessons: [] }]);
  };

  const updateModuleTitle = (index, title) => {
    const newModules = [...modules];
    newModules[index].title = title;
    setModules(newModules);
  };

  const addLesson = (moduleIndex) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons.push({ title: '', type: 'video', content: '' });
    setModules(newModules);
  };

  const updateLesson = (moduleIndex, lessonIndex, field, value) => {
    const newModules = [...modules];
    newModules[moduleIndex].lessons[lessonIndex][field] = value;
    setModules(newModules);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let thumbnailImg = await uploadImage(courseThumbnail);
    let course_id = uuid();
    const courseData = {
      title: courseTitle,
      description: courseDescription,
      thumbnail: thumbnailImg,
      modules
    };
    console.log('Course Data:', JSON.stringify(courseData, null, 2));
    // Submit courseData to your backend here

   const courseRef = await addDoc(collection(firestore,"COURSES"),{
    title:courseData["title"],
    description:courseData["description"],
    thumbnail:courseData["thumbnail"],
    id:course_id
   });

   for(const modules of courseData["modules"]){
    const moduleRef = await addDoc(collection(firestore,`COURSES/${courseRef.id}/modules`),{
        title:modules["title"],
    })

    for(const lesson of modules.lessons){
        await addDoc(collection(firestore,`COURSES/${courseRef.id}/modules/${moduleRef.id}/lesson`),{
            title:lesson.title,
            type:lesson.type,
            content:lesson.content
        })
    }
   }
}

/**
 * @param {File} url
 */
const uploadImage = async(url) =>{
    const imageId = uuid();
    const ref01 = ref(storage, `COURSE/IMAGES/${imageId}/${url.name}`);
    await uploadBytes(ref01, url);
    const downloadedUrl = await getDownloadURL(ref01);
    //setThumbnail(downloadedUrl);
    return downloadedUrl;
}

  return (
    <div className="container">
      <h2>Create a New Course</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="course-title">Course Title:</label>
          <input
            type="text"
            id="course-title"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            required
          />
        </div>

        <div className='form-group'>
            <Input inputProps={{accept:'image/*'}} placeholder='Course thumbnail' type='file' onChange={(event)=>{
                setThumbnail(event.target.files[0])
                setImageSrc(event.target.files[0]);
            }} required/><img style={
                {
                    display: courseThumbnail ? 'inline-block' : 'none'
                }
            } className='course-thumbnail' width={420}height={320} src={imgSrc ? URL.createObjectURL(imgSrc) : ''} />
        </div>

        <div className="form-group">
          <label htmlFor="course-description">Course Description:</label>
          <TextareaAutosize
            id="course-description"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
          />
        </div>

        <div id="modules-container">
          <h3>Modules</h3>
          {modules.map((module, moduleIndex) => (
            <div key={moduleIndex} className="module">
              <h4>Module {moduleIndex + 1}</h4>
              <label htmlFor={`module-title-${moduleIndex}`}>Module Title:</label>
              <input
                type="text"
                id={`module-title-${moduleIndex}`}
                value={module.title}
                onChange={(e) => updateModuleTitle(moduleIndex, e.target.value)}
                required
              />
              <div id={`lessons-container-${moduleIndex}`}>
                <h5>Lessons</h5>
                {module.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="lesson">
                    <label htmlFor={`lesson-title-${moduleIndex}-${lessonIndex}`}>Lesson Title:</label>
                    <input
                      type="text"
                      id={`lesson-title-${moduleIndex}-${lessonIndex}`}
                      value={lesson.title}
                      onChange={(e) => updateLesson(moduleIndex, lessonIndex, 'title', e.target.value)}
                      required
                    />
                    <label htmlFor={`lesson-type-${moduleIndex}-${lessonIndex}`}>Content Type:</label>
                    <select
                      id={`lesson-type-${moduleIndex}-${lessonIndex}`}
                      value={lesson.type}
                      onChange={(e) => updateLesson(moduleIndex, lessonIndex, 'type', e.target.value)}
                    >
                      <option value="video">Video</option>
                      <option value="text">Text</option>
                      <option value="quiz">Quiz</option>
                      <option value="assignment">Assignment</option>
                    </select>
                    <label htmlFor={`lesson-content-${moduleIndex}-${lessonIndex}`}>Content:</label>
                    <TextareaAutosize
                      id={`lesson-content-${moduleIndex}-${lessonIndex}`}
                      value={lesson.content}
                      placeholder={lesson.type == "video" ? "Enter your video url" : `Enter ${lesson.type} content`}
                      onChange={(e) => updateLesson(moduleIndex, lessonIndex, 'content', e.target.value)}
                      required
                    />
                  </div>
                ))}
                <button className='new-lesson' type="button" onClick={() => addLesson(moduleIndex)}>Add Lesson</button>
              </div>
            </div>
          ))}
          <button className='new-modules' type="button" onClick={addModule}>Add Module</button>
          
        </div>
        <button className="submit" type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CourseCreation;