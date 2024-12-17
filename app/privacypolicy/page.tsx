"use client";
import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2 
      } 
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5, 
        delay: 0.2 
      } 
    }
  };

  const sections = [
    {
      heading: "What Information We Collect",
      description: "When you engage with us, we may collect personal details such as your name, email, phone number, or company details when you fill out forms like Contact Us, Become a Dealer, or our newsletter subscription. We use this information to make your experience with Rattan Energy smooth and enjoyable. Rest assured, it's only for our business purposes."
    },
    {
      heading: "Why We Use Your Information",
      description: "We use the information you share with us to respond to your inquiries and fulfill your requests. It helps us improve our services and make our website more user-friendly. We may also send updates, newsletters, or promotions, but only if you've agreed to it. Your information ensures security and helps prevent fraud. Importantly, we will never sell or share your information with third parties for marketing purposes—that's a promise."
    },
    {
      heading: "How We Store Your Data",
      description: "Your data is securely stored on our servers, protected by strong encryption and security measures. While we do everything we can to keep your information safe, no online transmission is completely risk-free. By using our site, you agree to the storage and transfer of your data as outlined here."
    },
    {
      heading: "Your Rights as a User",
      description: "As part of our commitment to transparency, you have rights to access your data and find out what information we have about you. If something's wrong or needs to be removed, you can correct or delete it. You also have the right to object to how we're using your information, especially for marketing purposes. If you feel your rights are being overlooked, you can contact a data protection authority. To exercise these rights, please get in touch with us at [insert contact email]."
    },
    {
      heading: "You Can Object to Processing",
      description: "If you're not a fan of how we're processing your data, let us know, and we'll make it right. We respect your preferences and will take action promptly to address your concerns."
    },
    {
      heading: "Newsletters",
      description: "We offer electronic newsletters which you may voluntarily subscribe to. You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or by contacting us. However, you will continue to receive essential transactional emails."
    },
    {
      heading: "Cookies",
      description: "The Website uses cookies to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. We may use cookies to collect, store, and track information for statistical purposes to operate our Website. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer."
    },
    {
      heading:"Information security",
      description:"We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed. Therefore, while we strive to protect your Personal Information, you acknowledge that (i) there are security and privacy limitations of the Internet which are beyond our control; (ii) the security, integrity, and privacy of any and all information and data exchanged between you and our Website cannot be guaranteed; and (iii) any such information and data may be viewed or tampered with in transit by a third-party, despite best efforts."
    },
    {
      heading:"Data breach",
      description:"In the event we become aware that the security of the Website has been compromised or users’ Personal Information has been disclosed to unrelated third-parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the user as a result of the breach or if notice is otherwise required by law. When we do we will send you an email."
    },
    {
      heading:"Legal disclosure",
      description:"We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena, or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request. In the event we go through a business transition, such as a merger or acquisition by another company, or sale of all or a portion of its assets, your user account and personal data will likely be among the assets transferred."
    },
    {
      heading:"Changes and amendments",
      description:"We reserve the right to modify this privacy policy relating to the Website at any time, effective upon posting of an updated version of this Policy on the Website. When we do we will revise the updated date at the bottom of this page. Continued use of the Website after any such changes shall constitute your consent to such changes."
    },
    {
      heading:"Acceptance of this policy",
      description:"You acknowledge that you have read this Policy and agree to all its terms and conditions. By using the Website you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to use or access the Website."
    },
    {
      heading:"Contacting us",
      description:"If you have any questions about this Policy, please contact us by email at support@rattanenergy.com."
    },
  ];

  return (
    <div className="py-4">
      <div className="max-w-5xl mx-2 md:mx-auto px-2 sm:px-6 lg:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="mb-16"
        >
          <motion.h2 
            variants={paragraphVariants}
            className="text-3xl font-bold mb-4 text-center"
          >
            Privacy Policy
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            className="text-lg text-gray-400 mb-6"
          >
            This privacy policy ("Policy") describes how Rattan energy ("Rattan Energy", "we", "us" or "our") collects, protects and uses the personally identifiable information ("Personal Information") you ("User", "you" or "your") may provide through the Rattan Energy website. The Policy also describes the choices available to you regarding our use of your Personal Information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
          </motion.p>
        </motion.section>

        {sections.map((section, index) => (
          section.heading && (
            <motion.section
              key={index}
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="mb-16"
            >
              <motion.h3 
                variants={paragraphVariants}
                className="text-xl font-bold mb-4"
              >
                {section.heading}
              </motion.h3>
              <motion.p
                variants={paragraphVariants}
                className="text-md text-gray-400 mb-6"
              >
                {section.description}
              </motion.p>
            </motion.section>
          )
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;