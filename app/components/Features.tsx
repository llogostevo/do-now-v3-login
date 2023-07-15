const featuresData = [
    {title : "Harnessing the Power of Spaced Repetition", description :  "Spaced repetition is a proven study technique leveraging increasing intervals of time between subsequent reviews of previously mastered material. By doing so, it takes full advantage of the psychological spacing effect, enabling more effective and long-lasting learning."},
    {title : "Mastering the Art of Ideal Spacing", description : "Our system operates based on a key observation: there's an optimal time to revisit learned information, ideally right before it's on the brink of being forgotten. Reviewing at this precise juncture not only refreshes your memory but also extends the duration of retention, enhancing your learning experience."},
    {title : "Optimal Timing with Our Advanced Spacing Algorithm", description : "Our state-of-the-art Spacing Algorithm strives to deliver an automated review opportunity precisely when it's most beneficial for your learning retention. It's not just about revisiting what you've learned, but doing it at the perfect moment for maximum memory reinforcement."},
    {title : "Streamlined Learning: No More Guesswork", description : "Learners and educators often expend valuable time pondering over which topics need revisiting, when they should be reviewed, and the appropriate questions to ask. The Do Now Generator seamlessly automates this process, freeing your mind to focus solely on the journey of knowledge acquisition."},
    {title : "The Triple-Interval to Mastery", description : "Upon activating our program, you will encounter three meticulously selected questions from your field of study. These will encompass a recent topic from your previous session, another from a mid-term subject, and one hailing from a long-term concept, ensuring a comprehensive coverage of your learning journey"},
    {title : "DoNowAI: Intelligent Learning Assisted", description : "Equipped with our sophisticated AI model, DoNowAI presents you with randomized questions curated from the topics you're exploring. Not only that, it also furnishes you with corresponding answers, making your learning process more efficient and enjoyable."},
]

export default function Features(){
    return(
        <>
            <div className="grid place-items-center w-full bg-base-200">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">Unleashing the Learning Potential</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    featuresData.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl">
                                <div className="card-body mt-4 items-center text-center">
                                    <h2 className="card-title">{i.title}</h2>
                                    <p>{i.description}</p>
                                </div>
                                </div>
                        )
                    })
                }
                
            </div>
            <button className="btn btn-primary mt-6 mx-2">Get Started</button>
            </div>
        </div>
        </>
    )
}