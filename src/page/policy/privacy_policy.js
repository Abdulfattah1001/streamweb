import styles from '../../styles/index/privacy.module.css'


export default function PrivacyPolicy(){
    return(
        <section>
            <div>
                <span>Updated: June 01, 2024</span>
                <h1>Usage Policies</h1>
                <dl>
                    <dd><span className={styles.subheader}>1. Introduction</span></dd>
                    <dt>
                    <p>Welcome to Stream ("We","us","our"). This Privacy Policy explains how we collect, use, disclose and safeguard your information when you use our social media platform,ncluding our web,mobile applications, and any other related services. By using the services, you agree to the collecttion and use of information in accordance with this policyy.</p>
                    </dt>

                    <dd><span className={styles.subheader}>2. Information We Collect</span></dd>
                    <dt>
                    <span className={styles.subsection}>2.1 Personal Information</span>
                        <p>We may collect personal information that can be used to identify you, such as: </p>
                        <ul>
                        <li>Name</li>
                            <li>Email Address</li>
                            <li>Phone Number</li>
                            <li>Username</li>
                            <li>Passwod</li>
                            <li>ProfilePicture</li>
                            <li>Date of birth</li>
                            <li>Gender</li>
                        </ul>

                        <span className={styles.subsection}>2.2 Non-Personal Information</span>
                        <p>We may collect non-personal information that does not directly identify you, including:</p>
                        <ul>
                        <li>Device information</li>
                        <li>Log information(e.g IP address, browser type)</li>
                        <li>Usage data</li>
                        <li>Location</li>
                        </ul>

                        <span className={styles.subsection}>2.3 Content</span>
                        <p>We collect the content you create, share or communicate with others including: </p>
                        <ul>
                        <li>Posts, comments,and interactions</li>
                        <li>Messages and communicattions with other users</li>
                        <li>Media (Photos, videos,audio)</li>
                        </ul>
                    </dt>

                    <dd><span className={styles.subheader}>3.How We Use Your Information</span></dd>
                    <dt>
                    <p>We use the information we collect for various purposes,including: </p>
                    <ul>
                    <li>To Provide,operate, and maintain our services</li>
                    <li>To improve,personalize and expand our services</li>
                    <li>To understand and analyze how you use our Services</li>
                    <li>To develop new products, services, features</li>
                    </ul>
                    </dt>
                </dl>
            </div>
        </section>
    )
}