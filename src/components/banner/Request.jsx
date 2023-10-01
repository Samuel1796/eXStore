import styles from '../../styles/styles.module.css'
import "./Request.css"

const Request = () => {

    return (
        <section className="bg-white mt-20">
            <h1 className={styles.topper}>Didn't find what you were looking for?</h1>
            <p className={styles.subb}>Request and it will be posted within 3days</p>




            {/* <div class="subscribe ">
                <p>eXStore </p>
                <input placeholder="Your e-mail" class="subscribe-input" name="email" type="email"></input>
                    <br></br>
                        <div class="submit-btn">REQUEST</div>
                    </div> */}

            <div class="containerr">
                <div class="carddd">
                    <a class="login">eXStore</a>
                    <div class="inputBox">
                        <input type="text" required="required"></input>
                        <span class="user"> Title</span>
                    </div>

                    <div class="inputBox">
                        <input type="text" required="required"></input>
                        <span>PC Game/Movie/Series</span>
                    </div>

                    <button type='submit' class="enter">SUBMIT</button>

                </div>
            </div>

                    
<figure class="max-w-screen-md mx-auto mt-10 text-center px-5">
    <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
        <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"The request feature is a game-changer. If you can't find your favourite movie or game in their collection, simply submit a request, and the dedicated team work tirelessly to fulfill it."</p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"></img>
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Yakubu Yohani</cite>
            <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at Yakubush Inc.</cite>
        </div>
    </figcaption>
</figure>




        </section>
    )
}

export default Request