
const mHead= ()=>{

    return ` 
      <div><a href="mind.html"> Therapy </a></div>
      <div><a href="mind.html">Mindfulness</a></div>
    `;
}



const getMindExperts = ()=>{

    let exports =[
       { title : "Transform Your Thinking", des : "Manage negative or anxious thoughts or overthinking ₹699", time:"50 Mins Session",image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/dcd1728e-d7dc-4952-b552-b1b1c97e9ac1.png"},
    
       { title : "Healthy Relationships", des : "Understand your relationship patterns and exploring healthy ways of connecting ₹699", time:"50 Mins Session", image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/1a2d8f7e-2c24-4cbf-88be-e2cf266dfa23.png"},

       { title : "Thrive at work", des : "Make work fulfilling and meaningful with the help of our experts ₹699", time:"50 Mins Session",image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/18a8d3b2-d262-4f78-908b-79a55a40ef68.png"},
       
       { title : "Transform Your Thinking", des : "Manage negative or anxious thoughts or overthinking ₹699", time:"50 Mins Session",image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/aebc57c2-ee58-41f7-a854-00fb5c5d55f9.png"},

       { title : "Better Sleep", des : "Consult with experts to learn effective strategies for restful sleep and good sleep", time:"50 Mins Session", image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/84248218-f8c0-44d8-b2d6-be415b742b9a.png"},

       { title : "COVID Stress", des : "Seek expert help from our therapists for coping with isolation and COVID-related", time:"50 Mins Session", image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/5e9f8ee5-83dd-4dca-beca-61885323ce3c.png"},

       { title : "Couple Therapy", des : "Resolve emotional conflicts in relationships and marriage ₹699", time:"50 Mins Session", image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/9ce1d9a2-d3c6-4a19-91bd-028d52f58c84.png"},

       { title : "Therapy", des : "Experts who help solve emotional problems ₹699", time:"50 Mins Session", image:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,ar_2.279,c_fit/dpr_2/image/vm/9355d11a-f088-4f10-b9df-72ea3ecf8e0b.png"},
    ];
    return exports;
}


const addFAQ= ()=>{

    return ` 
    <h2>FAQS</h2>
    <h4>some important questions</h4>
    <div class="faq-container">
        <div class="faq">
            <h3 class="faq-title"> Is therapy for me?</h3>
            <p class="faq-text">
            Whether you are experiencing symptoms that come in the way of daily living or want to explore issues 
            experienced in the past or are keen on enhancing your wellbeing and growth in life - therapy is suitable for all.
            </p>
            <button class="faq-toggle">
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div class="faq">
            <h3 class="faq-title">What should I expect during my first therapy session?</h2>
            <p class="faq-text">
            Your therapist will focus on getting to know you better through the first session.
             Together, the two of you will identify goals for follow up sessions.
             Your therapist may also share a few exercises for you to practice, if relevant.
            </p>
            <button class="faq-toggle">
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div class="faq">
            <h3 class="faq-title">What is the difference between a Therapist and a Psychiatrist?</h3>
            <p class="faq-text">
            Therapists go deep into our problems with us. They help us understand ourselves better and plan for recovery without using medicines.
             Psychiatrists diagnose and treat chronic mental health conditions and may use medicines. 
            </p>
            <button class="faq-toggle">
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div class="faq">
            <h3 class="faq-title">What does a Therapy pack offer?</h3>
            <p class="faq-text">
            A Therapy pack helps with continuity of your wellness journey,
             without having to bother about booking sessions one at a time.
              Your Therapist will recommend the number of sessions that you might need to address your challenges.
             We recommend you buy a pack only after a discussion with the therapist. 
            </p>
            <button class="faq-toggle">
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div class="faq">
            <h3 class="faq-title">How to book a 1 on 1 Therapy session?</h3>
            <p class="faq-text">
            Here’s how you can book a therapy session from the cure.fit app: Log into the cure.
            fit app From the bottom of the To-Do page, pick mind.fit Pick 1 on 1 therapy Pick a preferred center and time slot Make a payment That’s all!
            </p>
            <button class="faq-toggle">
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="faq">
            <h3 class="faq-title">Who all will have access to my medical data?</h3>
            <p class="faq-text">
            Only your assigned Therapist and/or assigned Psychiatrist will
             have access to your medical data until you provide explicit access to any other professional
            </p>
            <button class="faq-toggle">
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="faq">
            <h3 class="faq-title">The information I share with my therapist is sensitive information, is this information safe?
            </h3>
            <p class="faq-text">
            Absolutely! We ensure none of your medical/psychiatric information is shared with anyone but your Therapist and Psychiatrist.
             All the information you share with us is completely safe and secure with us.
            </p>
            <button class="faq-toggle">
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div> `
}


// data for minfulness tab 

// <<<<<<< aman
const addMindfulness_data=()=>{

    data=[
        { 
          descriptions: "",
          img : ""
    
    }

    ]

}


export { mHead, getMindExperts, addFAQ};