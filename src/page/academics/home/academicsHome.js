import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { auth, firestore } from "../../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import CourseItem from "../components/courseItem";
import AcademicsBottomNavigation from "../../../components/academicsBottomNavBar";

export default function AcademicsHome(){
    let [courses,setCourses] = useState();
    let [screenWidth, setScreenWidth]=useState(window.innerWidth);

    useEffect(function(){
        async function fetchCourses(id){
            const collectRef = collection(firestore, "COURSE");

            const courseSnapshot = await getDocs(collectRef);

            if(courseSnapshot.docs.length >0){
                let tempCourse = [];
                for(let snapshot of courseSnapshot.docs){
                    tempCourse.push(snapshot.data());
                }

                setCourses(tempCourse);
            }
        }

        onAuthStateChanged(auth, async function(user){
            if(user!=null){
                await fetchCourses(user.uid);
            }
        })

        window.addEventListener('resize', ()=>{setScreenWidth(window.innerWidth)})
    },[]);

    return(
        <section style={{
            background:'white'
        }}>
            <div></div>

            <div>
                {
                    courses && courses.map(function(course,index){
                        return (
                            <CourseItem course={course} />
                        )
                    })
                }
            </div>

            <div></div>
            {screenWidth < 480 ? <AcademicsBottomNavigation /> : null}
        </section>
    )
}