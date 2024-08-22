import React, { useState } from 'react';
import Navbar from './Nav1';
import cutting from './Images/cutting.png'
import experience from './Images/experience (1).png'
import search from './Images/search.png'
import HeroDesktop from './Images/hero-desktop@3x.webp'
import CImage1 from './Images/microsoft.jpeg'
import CImage2 from './Images/amazon.jpeg'
import CImage3 from './Images/AT.jpeg'
import CImage4 from './Images/fedex.jpeg'
import CImage5 from './Images/orange.jpeg'
import Card1 from './Images/Card1-resume.png'
import Card2 from './Images/Card2-cover.jpeg'
import Card3 from './Images/Card3-ats.jpeg'
import Card4 from './Images/Card4-career.jpeg'
import Card5 from './Images/Card5-resume.jpeg'
import Card6 from './Images/Card6-ready.jpeg'
import Perfect from './Images/perfect.png'
import Perfect2 from './Images/perfect3 (1).png'
import Perfect3 from './Images/perfect3 (2).png'
import step1 from './Images/Step1.png'
import step2 from './Images/step2.png'
import step3 from './Images/Step3.png'
import step4 from './Images/Step4.png'
import eg from './Images/eg.jpeg'
import resume1 from './Images/cascade.png'
import resume2 from './Images/concept.png'
import resume3 from './Images/crisp.png'
import resume4 from './Images/cubic.png'
import Step4 from './Images/cascade.png'
import Resume1 from './Images/account.webp'
import Resume2 from './Images/Bartender.webp'
import Resume3 from './Images/cashier.webp'
import Resume4 from './Images/customer.webp'
import Resume5 from './Images/projectm.webp'
import Resume6 from './Images/receptionist.webp'
import Resume7 from './Images/nurse.webp'
import Resume8 from './Images/sales.webp'
import Resume9 from './Images/server.webp'
import Resume10 from './Images/software.webp'
import Resume11 from './Images/student.webp'
import Resume12 from './Images/teacher.webp'
import './App.css'
function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (<>
    {/* <Nav /> */}
    <Navbar/>
    <div>
      <h1 className="Heading">Professional Resume & Cover Letter Tools For Any Job</h1>
      <p>Create a job-winning resume in minutes with our easy-to-use builder.</p>
      <button className="Yellow-Button">Try Our Resume Builder</button>
      <div style={{ display: "flex" }}>
        <span className="Infocards col-lg-4">
          <img className='HeadImage' src={cutting} alt="cutting" />
          <span style={{ display: "block" }}>
            <h5>Cutting Edge Career Tools</h5>
            <p>Build a matching resume and cover letter with step-by-step guidance and expert tips.</p>
          </span>
        </span>
        <span className="Infocards col-lg-4">
          <img className='HeadImage' src={experience} alt="cutting" />
          <span style={{ display: "block" }}>
            <h5>Extensive Experience</h5>
            <p>Use our vast industry expertise to land your dream job faster.</p></span>
        </span>
        <span className="Infocards col-lg-4">
          <img className='HeadImage' src={search} alt="cutting" />
          <span style={{ display: "block" }}>
            <h5>Expert-Crafted Guides and Examples</h5>
            <p>Grow your career with our expert blog cited by universities and top media outlets.</p></span>
        </span>
      </div>
    </div>






    <span >
      <img className='Image' src={HeroDesktop} alt='Image' />
    </span>



    <div className='CompanyCard'>
      <p>Our customers are hired by :*</p>
      <span><img src={CImage1} alt='image' /></span>
      <span><img src={CImage2} alt='image' /></span>
      <span><img src={CImage3} alt='image' /></span>
      <span><img src={CImage4} alt='image' /></span>
      <span><img src={CImage5} alt='image' /></span>
    </div>







    <div className='countInfoCard'>
      <div>
        <div className="countCard">
          <div className="countCardStyle col-lg-4">
            <span className="counts">41M+</span>
            <p className="countsText">Job appilcations created.</p>
          </div>
          <div className="countCardStyle col-lg-4">
            <span className="counts">1400+</span>
            <p className="countsText">Free career guides</p>
          </div>
          <div className="countCardStyle col-lg-4">
            <span className="counts">40M+</span>
            <p className="countsText">Readers a year</p>
          </div>
        </div>
        <div className="countCard">
          <div className="countCardStyle col-lg-6">
            <span className="counts">30+</span>
            <p className="countsText">career Experts</p>
          </div>
          <div className="countCardStyle col-lg-6">
            <span className="counts">10+</span>
            <p className="countsText">Years in Business</p>
          </div>
          <div className="countCardStyle col-lg-6" >
            <span className="counts">1000+</span>
            <p className="countsText">Mentions by universites and media.</p>
          </div>
        </div>
      </div>










      <div className='countContent'>
        <h1>What is zety?</h1>
        <p>Zety is an all-in-one career platform powered by some of the best career experts and a community of 40 million readers a year.</p>
        <p>We offer you the best online resume and cover letter builder, as well as free professional advice from career experts. We know how stressful the job search can be. That’s why we want to make it as easy and smooth as possible.</p>
        <p>We’ll not only help you build your resume but also teach you how to ace a job interview, negotiate your salary, and more. You can trust us on your professional journey.</p>
      </div>
    </div>




    <h1>How Can We Help You?</h1>
    <div style={{ display: "flex" }}>
      <card className="Infocards col-lg-4">
        <img className='HeadImage' src={Card1} alt="cutting" />
        <span style={{ display: "block" }}>
          <h5>Resume Builder</h5>
          <p>Zety’s resume builder will save you time and provide expert tips every step of the way. Creating a resume has never been easier.</p></span>
      </card>
      <card className="Infocards col-lg-4">
        <img className='HeadImage' src={Card2} alt="cutting" />
        <span style={{ display: "block" }}>
          <h5>Cover Letter Builder</h5>
          <p>Smoothly generate a job-winning cover letter with our drag-and-drop interface.</p></span>
      </card>
      <card className="Infocards col-lg-4">
        <img className='HeadImage' src={Card3} alt="cutting" />
        <span style={{ display: "block" }}>
          <h5>ATS-Friendly Resume Templates</h5>
          <p>Grab recruiters’ attention with one of 18 professional resume templates designed by career experts.</p></span>
      </card>

    </div>






    <div style={{ display: "flex" }}>
      <card className="Infocards ">
        <img className='HeadImage' src={Card4} alt="cutting" />
        <span style={{ display: "block" }}>
          <h5>Free Career Advice Resources</h5>
          <p>Consciously shape your career with helpful guides and resume examples. Writing the perfect job application? Asking for a raise? Learn it all (and more) on our blog.</p></span>
      </card>
      <card className="Infocards">
        <img className='HeadImage' src={Card5} alt="cutting" />
        <span style={{ display: "block" }}>
          <h5>Resume Check</h5>
          <p>Score and check your resume in real-time with our resume checker. Get actionable tips to improve your resume.</p></span>
      </card>
      <card className="Infocards">
        <img className='HeadImage' src={Card6} alt="cutting" />
        <span style={{ display: "block" }}>
          <h5>Ready-Made Content Suggestions</h5>
          <p>Discover expert-crafted content suggestions and create a professional job application in minutes.</p></span>
      </card>

    </div>







    <h1>Boost Your Career With Our Free Resources</h1>
    <p>Need help with your resume or cover letter? Visit our career blog with over 1,400 insightful articles. Our expert advice is based on first-hand experience, in-depth job market research, and HR expertise.</p>
    <p>Each day, we analyze hiring trends, browse through workforce reports, and monitor job market forecasts to make sure you get all the information you need to land your dream job.</p>
    <p>Our work has been featured by reputable media outlets and top universities from around the globe. Here are some of our most valuable resources:</p>







    <div>
      <h3 className="questionHead">How to Make a Resume: Writing Guide & Examples for 2024</h3>
      <div class="blogTitleAuthor"><span class="blogTitleAuthorName">Maciej Tomaszewicz, CPRW</span> <time>July 26, 2024</time></div>
    </div>
    <hr></hr>
    <div>
      <h3 className="questionHead">Best Resume Format for 2024 [Guide & Templates]</h3>
      <div class="blogTitleAuthor"> <span class="blogTitleAuthorName">Maciej Tomaszewicz, CPRW</span> <time>July 26, 2024</time></div>
    </div>
    <hr></hr>
    <div>
      <h3 className="questionHead">50+ Best Resume Summary Examples + 2024 How-To Guide</h3>
      <div class="blogTitleAuthor"> <span class="blogTitleAuthorName">Maciej Tomaszewicz, CPRW</span> <time>July 26, 2024</time></div>
    </div>
    <hr></hr>
    <div>
      <h3 className="questionHead">How to Make a Resume With No Experience: Examples</h3>
      <div class="blogTitleAuthor"> <span class="blogTitleAuthorName">Maciej Tomaszewicz, CPRW</span> <time>July 26, 2024</time></div>
    </div>





    <hr></hr>
    <div className="template-section">
      <div className="template-content">
        <img src={Perfect3} alt="Icon" className="template-icon" />
        <div className="template-text">
          <h2 className="template-title">Check out our career development guides</h2>
          <p className="template-description">
            Learn everything you need to take your career to the next level!
          </p>
        </div>
      </div>

      <button className="template-button" >See All Resume Templates</button>
    </div>





    <h1>Create Your Perfect Resume in 4 Easy Steps:</h1>
    <section className="Cards">
      <div className="StepCard col-lg-3">
        <img className="Stepimage" src={step1} alt={step4}></img>
        <div className="StepButton">
          <p>Step 1</p></div>
        <p>Pick a resume template</p>
        <p>Choose from 18 professional templates. They're made by career experts and designers to help you land the interview</p>
      </div>
      <div className="StepCard col-lg-3">
        <img className="Stepimage" src={step2} alt={step4}></img>
        <div className="StepButton">
          <p>Step 2</p></div>
        <p>Add expert-written content</p>
        <p>With a few clicks, add tailored, job-specific content to your resume created by Certified Professional Resume Writers.</p>
      </div>
      <div className="StepCard col-lg-3">
        <img className="Stepimage" src={step3} alt={step4}></img>
        <div className="StepButton">
          <p>Step 3</p></div>
        <p>Personalize it</p>
        <p>Easily change the colors, fonts, and layout with our intuitive interface.</p>
      </div>
      <div className="StepCard col-lg-3">
        <img className="Stepimage" src={step4} alt={step4}></img>
        <div className="StepButton">
          <p>Step 4</p></div>
        <h5>Download in PDF or DOC</h5>
        <p>Download your polished resume in the preferred file format and apply for your dream job immediately</p>
      </div>

    </section>






    <h1>Pick from 18 Professional Resume Templates</h1>
    <p>Build your resume quickly and effortlessly. Zety’s resume builder comes with beautifully designed, ATS-optimized resume templates to help you find your desired job faster. Start by choosing your template.</p>

    <section className="Card">
      <div className="templatesection">
        <img className="TemplateImage" src={resume1} alt={Step4}></img>
        <p>Cascade</p>
        <p>Sleek design with a modern edge, blending professionlism and creativity.</p>
      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={resume2} alt={Step4}></img>
        <p>Concept</p>
        <p>Innovative design, mergin creativity with professionalism,</p>
      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={resume3} alt={Step4}></img>
        <p>Crisp</p>
        <p>Minimalist aesthetic, providing a polished canvas for career achievemants.</p>
      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={resume4} alt={Step4}></img>
        <p>Cubic</p>
        <p>Modern desgin with geometric elements, giving a professional resume look.</p>
      </div>

    </section>







    <div className="template-section">
      <div className="template-content">
        <img src={Perfect} alt="Icon" className="template-icon" />
        <div className="template-text">
          <h2 className="template-title">Find the perfect template</h2>
          <p className="template-description">
            Discover our resume templates and pick the one that suits your needs.
          </p>
        </div>
      </div>

      <button className="template-button" >See All Resume Templates</button>
    </div>






    <h1>Get Inspired with Resume Samples Written by Certified Professional Resume Writers</h1>
    <p>Explore our vast library of over 600 resume examples tailored to most professions and industries. Our team of Certified Professional Resume Writers makes sure that every guide includes a relevant resume example and actionable tips to apply when creating your own resume.</p>
    <section className="HoverCard">
      <div className="templatesection">
        <img className="TemplateImage" src={Resume1} alt={Step4}></img>
        <p>Accounting Resume</p>

      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={Resume2} alt={Step4}></img>
        <p>Bartender Resume</p>

      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={Resume3} alt={Step4}></img>
        <p>Cashier Resume</p>

      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={Resume4} alt={Step4}></img>
        <p>Customer service Resume</p>

      </div>
    </section>










    <section className="HoverCard">
      <div className="templatesection">
        <img className="TemplateImage" src={Resume5} alt={Step4}></img>
        <p>Project manager Resume</p>

      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={Resume6} alt={Step4}></img>
        <p>Receptionist Resume</p>

      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={Resume7} alt={Step4}></img>
        <p>Registred Nurse Resume</p>

      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={Resume8} alt={Step4}></img>
        <p>Sales Resume</p>

      </div>
    </section>







    <section className="HoverCard">
      <div className="templatesection">
        <img className="TemplateImage" src={Resume9} alt={Step4}></img>
        <p>Server Resume</p>

      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={Resume10} alt={Step4}></img>
        <p>Software engineer Resume</p>

      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={Resume11} alt={Step4}></img>
        <p>Student Resume</p>

      </div>
      <div className="templatesection">
        <img className="TemplateImage" src={Resume12} alt={Step4}></img>
        <p>Teachers Resume</p>

      </div>
    </section>







    <div className="template-section">
      <div className="template-content">
        <img src={Perfect2} alt="Icon" className="template-icon" />
        <div className="template-text">
          <h2 className="template-title">Browse through 600+ free resume examples</h2>
          <p className="template-description">
            Get inspired and make your resume shine!</p>
        </div>
      </div>
      <button className="template-button" >See All Resume Templates</button>
    </div>







    <div className="row content">
      <div className="col-lg-6 text-left">
        <h2>Try Our Easy-To-Use Resume Builder</h2>
        <p>
          Experience our intuitive resume builder and take a shortcut to your dream career.
          Discover why thousands of job seekers and HR experts trust us. Create your best
          resume quickly and easily today.
        </p>
        <button className="build-resume-button">Build Your Resume Now</button>
      </div>
      <div className="col-lg-6">
        <img src={eg} alt="Resume Examples" className="resume-image" />
      </div>
    </div>





    <br></br>
    <div className="faq-section">
      <h2>Frequently Asked Questions about Zety’s Website and Builder</h2><br></br>
      <h4>Why is Zety the best website to prepare a job application?</h4><br></br>
      <p><strong>Zety is the best website to build a professional resume and generate a convincing cover letter quickly and easily.</strong> By using Zety, you can benefit from all these advantages:</p>
      <ul style={{ textAlign: "left" }}>
        <li><strong>Feature-rich</strong> Resume Builder with professional resume templates for any job.</li>
        <li>CV maker with professional CV templates for academic applications.</li>
        <li>Cover letter builder with matching cover letter templates and text generator to save time.</li>
        <li>A resume upload feature to update your old resume instead of starting from scratch.</li>
        <li>Built-in content & suggestions <strong>tailored to your profession and job history.</strong></li>
        <li>Real-time resume score checker with actionable improvement tips.</li>
        <li><strong>Multiple formats</strong> to download your resume as: PDF, Word, and TXT.</li>
        <li> <strong>Printing documents</strong>directly from the app in US letter format or A4 format.</li>
        <li><strong>Cloud storage</strong> with unlimited number of documents to edit, duplicate or update.</li>
        <li><strong>Free resume making</strong>, with a <strong>14-day trial</strong> without feature restrictions.</li>
        <li>Want to see how it compares against other apps? See this ranking of the best resume builders available online</li>
      </ul>
      <hr />

      <h3>How do I use Zety Resume Builder effectively?</h3><br></br>
      <p>To make your resume online with Zety, follow these easy steps:</p>
      <ul style={{ textAlign: "left" }}>
        <li><strong>Select the template</strong> that best suits your profession and personality.</li>
        <li><strong>Upload your previous resume</strong>, or choose to <strong>create a brand new resume</strong>.</li>
        <li>Fill in the basic contact information <strong>fields</strong>, as well as your resume headline</li>
        <li>Pick the best resume format for your needs. We recommend the chronological resume format, but depending on your career path, you may need to consider the functional resume, the skills-based resume, or the combination resume.</li>
        <li>Write an eye-catching resume summary (or a resume objective if you’re writing a resume with no experience).</li>
        <li><strong>Describe your</strong> work history on your resume, from newest to oldest jobs.</li>
        <li><strong>List your top skills</strong>, and rate them when needed. Check how to put your skills on a resume here.</li>
        <li><strong>Put your</strong> education on your resume, with details if you’re an entry-level candidate.</li>
        <li>Add as much relevant <strong>additional information</strong> as possible. These can be achievements, internships, volunteer work, hobbies and interests, certifications, computer skills, language skills or publications.</li>
      </ul>
      <p>Most of those resume sections are mandatory, but some are optional (remember that your resume should be one-page long, ideally!).</p>
      <p>Be sure to read our article on what to put on a resume to get useful tips while making your resume with Zety, or check out how to write a resume, step by step.</p>
      <hr />

      <div className="info-section">
        <div className="info-item">
          <h2>Is Zety safe to use?</h2>
          <p>
            <strong>Yes, Zety is a legit business, you can check it out on the About Zety page.</strong> Every year, our resume maker, guides and examples help millions of job seekers in the world to find their dream jobs. The website and application are safe thanks to a secure SSL https encrypted connection. Your personal data is processed according to stringent policies you can learn more about in the terms of use, privacy policy, and cookie policy.
          </p>
        </div>
        <div className="separator"></div>
        <div className="info-item">
          <h2>Can I contact Zety easily if I need help with my account?</h2>
          <p>
            Our customer happiness agents are available to assist you with any issue you may encounter regarding the website, our applications or your Zety account. From solving problems you might encounter to managing your subscription, we are here to help. Visit our Contact page to know when our call center is open, to send us a message via email or fill a contact form. We will get back to you as soon as possible.
          </p> <div className="separator"></div>
          {isExpanded && (
            <><div className="extra-content">
              <h2>Does Zety have resume examples that I can look at?</h2>
              <p>
                Zety has more than 500 free resume examples for you to read while making your own resume. All of our examples were written by Certified Professional Resume Writers (CPRW), after extensive research. You can use our resume examples and guides while making your resume with Zety to make the process of resume writing even faster and easier.
              </p>
              <p>
                While we tried to cover as many professions as possible to ensure you will always find the sample resume you need, there’s a chance that your specific job isn’t on our list. If that’s the case, we encourage you to read our guide on the general resume, where you will learn how to write a more universal document.
              </p>
            </div><div className="separator"></div>
              <div className="extra-content">
                <h2>Can Zety review my resume when I’ve finished making it?</h2>
                <p>
                  The Zety Resume Maker includes a very useful and popular feature called Resume Check. Throughout the resume making
                  process, our software will read your document and compare it against all other similar resumes in our database, in
                  real-time. Not only will you know where your resume might be under-optimized, but our resume check tool will also
                  give you a quality score and specific tips on what to improve.
                </p>

              </div><div className="separator"></div>

              <div className="extra-content">
                <h2>Are resumes made with Zety ATS-friendly?</h2>
                <p>
                  All of Zety’s templates, be it for resumes, CVs, or cover letters, are ATS-compliant. You can safely send the resume you’ve made
                  with Zety to any company, anywhere, and the Applicant Tracking Systems will be able to read and understand your documents.
                  If you’re new to that concept, don’t hesitate to read our guide on ATS resume templates and why they are key to a successful job hunt!
                </p>

              </div><div className="separator"></div>

              <div className="extra-content">
                <h2>Which resume template should I use in 2024?</h2>
                <p>
                  Zety only offers Modern Resume Templates. They are all available in dozens of color schemes, and you can customize
                  their structure, fonts, margins, and so on. A resume template should be easy to fill in and real, while eye-catching.
                  At Zety, we have carefully crafted every single of our templates to make sure they match both the recruiters’ and the
                  candidates’ preferences. For more details, read our article describing what a resume should look like in 2024.

                  Every change you make in the resume will automatically adjust the contents of your document for you, so you never have
                  to worry about breaking anything.
                </p>

              </div><div className="separator"></div>

              <div className="extra-content">
                <h2>Why do I need a different resume for every job application?</h2>
                <p>
                  Recruiters and hiring managers typically receive hundreds of applications per day. To filter out all the applications
                  that do not meet their needs, they use application tracking software that eliminates all resumes that are not tailored
                  for specific keywords included in the job ad. But even without ATS apps, they can quickly differentiate a generic
                  resume copy-pasted and sent to every single company around from a resume tailored to their job ad.

                  That’s why in your resume, you have to highlight skills and experiences which directly address the company’s needs
                  listed in the job description. To make the cut, you have to send a different resume every time.

                  In the Zety online resume maker you can quickly duplicate your resume and adjust it to a specific job title in a few clicks!
                </p>

              </div><div className="separator"></div>

              <div className="extra-content">
                <h2>Should I download my new resume in PDF or Word?</h2>
                <p>
                  With Zety, you can make a resume for free, and download it in the format of your choice. The most common formats
                  for a resume are PDF and Word. Always opt for the PDF resume if you are sending your document right away. It will
                  ensure your resume layout remains intact on any device and software. Download your resume in Word if you want to have
                  a copy of it that you can edit later.

                  Note that with your Zety account, you can keep as many copies of your resume as you need online, enabling you to update or edit
                  it for another job application, anytime & anywhere. For more information, read about Word VS PDF resume formats
                </p>

              </div><div className="separator"></div>

              <div className="extra-content">
                <h2>Do I need a cover letter for my resume?</h2>
                <p>
                  Yes, you need a cover letter for your resume. Despite what many candidates believe, a cover letter is still necessary in 2024.
                  In this document, you can elaborate on your skills and work experience listed in the resume. It is the best way to complement your
                  resume and provide details of your achievements and abilities. Besides, attaching a covering letter to your job application is a
                  great sign of your motivation to get the job. Even if you’ve never written one in the past, you can still do it quickly. Read our
                  guide on how to write a cover letter, check our dozens of free cover letter examples, or
                  simply go directly to our cover letter builder.
                </p>

              </div><div className="separator"></div></>
          )}
          <button className="toggle-button" onClick={toggleExpand}>
            {isExpanded ? 'See less' : 'See more'}
          </button>
        </div>
      </div>
    </div>







    <div className="transform-career-container">
      <h2 className="headline">
        Transform your career today and<br /> join thousands of satisfied users
      </h2>
      <div className="underline"></div>
      <button className="cta-button">Try Our Resume Maker</button>
    </div>

  </>)
}
export default HomePage