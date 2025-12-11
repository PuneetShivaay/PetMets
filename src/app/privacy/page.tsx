
import { PawPrint, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 26, 2025";
  const companyName = "PetMets";
  const appName = "PetMets";
  const contactEmail = "info.petmets@gmail.com";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in-down">
          <ShieldCheck className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg prose-p:text-foreground/80 prose-headings:text-primary prose-headings:font-headline prose-strong:text-foreground">
          
          <p>
            Welcome to {appName}. This Privacy Policy explains how {companyName} ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use our mobile application and website (collectively, the "Services"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect via the Services includes:</p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Services.
            </li>
            <li>
              <strong>Pet Information:</strong> Information you provide about your pet(s), such as their name, breed, age, health details, and photos.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Services, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Services.
            </li>
            <li>
              <strong>Mobile Device Data:</strong> Device information such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you permit us to access this information.
            </li>
          </ul>
          
          <h2>2. How We Use Your Information</h2>
          <p>Having accurate information about you and your pet permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Services to:</p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Match you with other pet owners for social activities.</li>
            <li>Provide and manage pet-related services such as grooming, boarding, and walking.</li>
            <li>Email you regarding your account or order.</li>
            <li>Enable user-to-user communications.</li>
            <li>Generate a personal profile about you to make future visits to the Services more personalized.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Services.</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
          <ul>
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </li>
            <li>
              <strong>Other Users:</strong> Your profile information, including your name, photo, and details about your pet, will be visible to other users of the Services to facilitate social interaction.
            </li>
          </ul>

          <h2>4. Security of Your Information</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

          <h2>5. Requesting Account Deletion</h2>
          <p>You have the right to request the deletion of your account and all associated data. To do so, please send an email to our support team. Clicking the link below will open your default email client with a pre-filled request to make this process easier for you.</p>
          <p>
            <a 
              href={`mailto:${contactEmail}?subject=Account%20and%20Data%20Deletion%20Request&body=I%20would%20like%20to%20request%20the%20deletion%20of%20my%20PetMets%20account%20and%20all%20associated%20data.%0A%0APlease%20provide%20the%20email%20address%20or%20username%20associated%20with%20the%20account%20below%3A%0A%0A`}
              className="text-primary hover:underline"
            >
              Request Account and Data Deletion
            </a>
          </p>

          <h2>6. Policy for Children</h2>
          <p>We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</p>
          
          <h2>7. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by updating the "Last Updated" date of this Privacy Policy.</p>

          <h2>8. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p>
            <strong>{companyName}</strong><br />
            Email: <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a>
          </p>

        </div>
      </section>
    </div>
  );
}
