import Image from "next/image"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#D4C4F0] via-[#9B87C7] to-[#3A3555]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#3A3554]/70 border-b border-[rgba(184,160,214,0.12)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/luna-logo.png"
              alt="Luna owl mascot"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="text-xl font-semibold text-foreground tracking-tight">Luna</span>
          </Link>
          <Link
            href="/#pricing"
            className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#E0D4F8] transition-colors shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
          >
            Try Free
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2 tracking-tight">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last Updated: January 29, 2026</p>
            
            <div className="prose prose-invert max-w-none space-y-8 text-foreground">
              <p className="text-muted-foreground leading-relaxed">
                Luna App ("we," "us," or "our") operates the Luna mobile application ("App"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use Luna.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using Luna, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                
                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">1.1 Information You Provide Directly</h3>
                
                <h4 className="font-medium text-foreground mt-4 mb-2">Onboarding Responses (Anonymous)</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Sleep-related preferences (issues, goals, sound preferences)</li>
                  <li>Notification preferences (bedtime reminder time)</li>
                  <li>Age, gender, and personalization choices</li>
                  <li>Your name is NOT sent to our servers - it is stored only on your device</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Sleep Logs (Local Only)</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Sleep quality ratings (1-5 stars)</li>
                  <li>Emotion/notes about your sleep session</li>
                  <li>Sleep logs are stored only on your device and are never sent to our servers</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Feedback Reports</h4>
                <p className="text-muted-foreground mb-2">When you submit feedback or report a problem, we collect:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Your feedback message</li>
                  <li>Device type (e.g., "iPhone 15")</li>
                  <li>Operating system version (e.g., "iOS 17.2")</li>
                  <li>App version and build number</li>
                  <li>No personal identifiers are collected with feedback</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">1.2 Information Collected Automatically</h3>
                
                <h4 className="font-medium text-foreground mt-4 mb-2">Device Information</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Device type and model</li>
                  <li>Operating system and version</li>
                  <li>App version</li>
                </ul>
                <p className="text-muted-foreground mt-2">We do NOT collect:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Advertising identifiers (IDFA)</li>
                  <li>Persistent device IDs</li>
                  <li>IP addresses</li>
                  <li>Location data</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Usage Data (Anonymous)</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>App features used</li>
                  <li>Session duration</li>
                  <li>Sound preferences</li>
                  <li>All usage data is anonymized and cannot be linked to you personally</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Anonymous Identifier</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We generate a random anonymous ID (e.g., "anon_xxxx_yyyy") stored only on your device</li>
                  <li>This ID allows us to link your onboarding responses together without knowing who you are</li>
                  <li>This ID cannot be used to identify you personally</li>
                  <li>If you delete the app or request data deletion, this ID and all associated data are removed</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">1.3 Subscription Information</h3>
                <h4 className="font-medium text-foreground mt-4 mb-2">Handled by Apple/Google</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>All subscription purchases are processed through the Apple App Store or Google Play Store</li>
                  <li>We do NOT receive your email, payment information, or personal details from Apple/Google</li>
                  <li>We only receive confirmation that a subscription is active for your device</li>
                  <li>Contact Apple or Google directly for subscription and billing inquiries</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                
                <h4 className="font-medium text-foreground mt-4 mb-2">Provide and Improve the App</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Deliver sleep sounds and playback functionality</li>
                  <li>Remember your preferences and favorites</li>
                  <li>Track your sleep streaks and progress (stored locally on your device)</li>
                  <li>Improve sound recommendations based on anonymous usage patterns</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Send Notifications (If Enabled)</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>All notifications are local - they are scheduled on your device, not sent from a server</li>
                  <li>Bedtime reminders (if you enable them during onboarding)</li>
                  <li>Streak protection alerts</li>
                  <li>Background playback warnings</li>
                  <li>We do NOT collect or store your device push token</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Analyze and Improve</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Understand how users interact with Luna (anonymously)</li>
                  <li>Identify bugs and performance issues</li>
                  <li>Develop new features based on usage patterns</li>
                  <li>All analytics are aggregated and anonymous</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Respond to Feedback</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Address bug reports and feature requests</li>
                  <li>Improve user experience based on feedback</li>
                  <li>Feedback is anonymous - we cannot reply to individual reports unless you provide contact information in your message</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Store Your Information</h2>
                
                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.1 Local Storage (On Your Device)</h3>
                <p className="text-muted-foreground mb-2">The following data is stored only on your device using secure local storage:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Your name</li>
                  <li>Sleep logs (ratings, emotions, session history)</li>
                  <li>Sound favorites and presets</li>
                  <li>Timer preferences</li>
                  <li>Streak progress</li>
                  <li>All app settings</li>
                </ul>
                <p className="text-muted-foreground mt-2">This data is never sent to our servers and is deleted when you uninstall the app.</p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.2 Cloud Storage (Supabase - US Servers)</h3>
                <p className="text-muted-foreground mb-2">The following anonymous data is stored on our secure servers (Supabase, hosted in the United States):</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Onboarding responses (sleep issues, preferences, sound choices) linked to your anonymous ID</li>
                  <li>Feedback reports (device info, message content)</li>
                </ul>
                <h4 className="font-medium text-foreground mt-4 mb-2">Data Security:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>All data transmitted to our servers is encrypted using HTTPS/TLS</li>
                  <li>Data at rest is encrypted on Supabase servers</li>
                  <li>Anonymous data cannot be linked to your identity</li>
                  <li>We implement industry-standard security measures to protect your information</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.3 Data Retention</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li><strong>Onboarding Responses & Analytics:</strong> Retained for up to 2 years for product improvement and analysis, then automatically deleted</li>
                  <li><strong>Feedback Reports:</strong> Retained for up to 2 years for support and development purposes</li>
                  <li><strong>Sleep Logs:</strong> Stored only on your device until you delete the app or request data deletion</li>
                  <li><strong>No Automatic Deletion:</strong> We do not automatically delete your local data - you control this through app settings or uninstallation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. How We Share Your Information</h2>
                <p className="text-muted-foreground mb-4">We do NOT sell, rent, or trade your personal information.</p>
                <p className="text-muted-foreground mb-4">We may share anonymized, aggregated data in the following circumstances:</p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.1 Service Providers</h3>
                <p className="text-muted-foreground mb-2">We use trusted third-party services to operate Luna:</p>
                
                <h4 className="font-medium text-foreground mt-4 mb-2">Supabase (Database & Backend)</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Stores anonymous onboarding responses and feedback</li>
                  <li>Hosted in the United States</li>
                  <li>Subject to Supabase&apos;s security and privacy policies</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Apple App Store / Google Play Store</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Processes subscriptions and payments</li>
                  <li>We do NOT receive your payment information</li>
                  <li>Subject to Apple&apos;s and Google&apos;s privacy policies</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">No Other Third Parties</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We do NOT use advertising networks</li>
                  <li>We do NOT use third-party analytics (Google Analytics, Facebook, etc.)</li>
                  <li>We do NOT integrate with social media platforms</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.2 Legal Requirements</h3>
                <p className="text-muted-foreground mb-2">We may disclose your information if required to do so by law or in response to:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Valid legal processes (subpoenas, court orders)</li>
                  <li>Requests from law enforcement or government agencies</li>
                  <li>Protection of our rights, property, or safety</li>
                  <li>Prevention of fraud or illegal activity</li>
                </ul>
                <p className="text-muted-foreground mt-2">We will notify you of legal requests unless prohibited by law.</p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.3 Business Transfers</h3>
                <p className="text-muted-foreground mb-2">If Luna App is acquired, merged, or undergoes a business transition:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Your information may be transferred to the new entity</li>
                  <li>We will notify you via the app or email (if we have it) before your information is transferred</li>
                  <li>The new entity will be bound by this Privacy Policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Your Privacy Rights</h2>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">5.1 Access Your Data</h3>
                <p className="text-muted-foreground mb-2">You can view all locally stored data (sleep logs, preferences) within the app:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Go to &quot;You&quot; tab &rarr; &quot;Profile&quot; &rarr; View your data</li>
                </ul>
                <p className="text-muted-foreground mt-2">Server-side data (onboarding responses):</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We cannot provide individual access because responses are anonymized</li>
                  <li>We cannot link your anonymous ID to you without additional information</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">5.2 Delete Your Data</h3>
                <h4 className="font-medium text-foreground mt-4 mb-2">Delete Local Data:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Uninstall the app to remove all locally stored data (name, sleep logs, preferences)</li>
                  <li>Or go to &quot;You&quot; tab &rarr; &quot;Profile&quot; &rarr; &quot;Delete Account&quot;</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Delete Server Data:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Go to &quot;You&quot; tab &rarr; &quot;Profile&quot; &rarr; &quot;Delete Account&quot;</li>
                  <li>This will delete all onboarding responses linked to your anonymous ID</li>
                  <li>Deletion is permanent and cannot be undone</li>
                  <li>Note: Aggregated analytics that cannot be linked to you will remain</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">What Happens After Deletion:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Your anonymous ID and all associated onboarding responses are deleted from our servers within 30 days</li>
                  <li>Local data (sleep logs, preferences) is immediately removed from your device</li>
                  <li>Your subscription remains active until the current period ends (managed by Apple/Google)</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">5.3 Opt-Out of Notifications</h3>
                <p className="text-muted-foreground mb-2">You can disable notifications at any time:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>In the app: &quot;You&quot; tab &rarr; &quot;Settings&quot; &rarr; Toggle off notifications</li>
                  <li>Device settings: iOS Settings &rarr; Luna &rarr; Notifications &rarr; Turn off</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">5.4 California Residents (CCPA)</h3>
                <p className="text-muted-foreground mb-2">If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li><strong>Right to Know:</strong> You can request information about what data we collect, use, and share (see Section 1 above)</li>
                  <li><strong>Right to Delete:</strong> You can request deletion of your data (see Section 5.2 above)</li>
                  <li><strong>Right to Opt-Out of Sale:</strong> We do NOT sell your personal information - this right does not apply</li>
                  <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights</li>
                </ul>
                <p className="text-muted-foreground mt-2">How to Exercise Your Rights:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Use the in-app &quot;Delete Account&quot; feature</li>
                  <li>Or contact us at info@lunanoise.tech</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Children&apos;s Privacy</h2>
                <p className="text-muted-foreground mb-4">Luna is available for users of all ages. However:</p>
                <p className="text-muted-foreground mb-2">We do NOT knowingly collect personal information from children under 13 without parental consent.</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We collect only anonymized, non-personal information (onboarding preferences)</li>
                  <li>No email, name (server-side), or identifiable data is collected</li>
                  <li>Parents can delete all data by using the &quot;Delete Account&quot; feature</li>
                </ul>
                <p className="text-muted-foreground mt-4">If you are a parent or guardian and believe your child has provided us with personal information:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Contact us immediately at info@lunanoise.tech</li>
                  <li>We will delete the information within 30 days</li>
                </ul>
                <p className="text-muted-foreground mt-4">Compliance:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Luna complies with the Children&apos;s Online Privacy Protection Act (COPPA)</li>
                  <li>We do not use advertising networks or third-party tracking for children</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. International Users</h2>
                <p className="text-muted-foreground mb-4">Luna is currently available only in the United States.</p>
                <p className="text-muted-foreground mb-2">If you use Luna from outside the U.S., please note:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Your data may be transferred to and stored on servers in the United States</li>
                  <li>U.S. data protection laws may differ from your country&apos;s laws</li>
                  <li>By using Luna, you consent to the transfer of your information to the U.S.</li>
                </ul>
                <p className="text-muted-foreground mt-4">We do NOT currently comply with:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>GDPR (European Union) - we do not operate in the EU</li>
                  <li>Other international privacy regulations</li>
                </ul>
                <p className="text-muted-foreground mt-2">If we expand internationally, we will update this Privacy Policy accordingly.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Data Security</h2>
                <p className="text-muted-foreground mb-4">We implement reasonable security measures to protect your information:</p>
                
                <h4 className="font-medium text-foreground mt-4 mb-2">Technical Measures:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>HTTPS/TLS encryption for all data transmission</li>
                  <li>Encrypted storage on Supabase servers</li>
                  <li>Secure local storage on your device (iOS Keychain, encrypted storage)</li>
                  <li>No collection of unnecessary personal data (privacy by design)</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Organizational Measures:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Limited access to data (only essential personnel)</li>
                  <li>Regular security audits and updates</li>
                  <li>Incident response procedures</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Limitations:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>No method of transmission or storage is 100% secure</li>
                  <li>We cannot guarantee absolute security of your information</li>
                  <li>You are responsible for keeping your device secure (passcode, biometric lock)</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">In the Event of a Breach:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We will notify affected users within 72 hours</li>
                  <li>We will report to authorities as required by law</li>
                  <li>We will take immediate steps to mitigate damage</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">9. Third-Party Links</h2>
                <p className="text-muted-foreground mb-4">Luna does NOT currently contain links to third-party websites or services.</p>
                <p className="text-muted-foreground mb-2">If we add external links in the future:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We are not responsible for the privacy practices of third-party sites</li>
                  <li>We encourage you to read their privacy policies</li>
                  <li>This Privacy Policy applies only to Luna</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground mb-2">We may update this Privacy Policy from time to time to reflect:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Changes to our data practices</li>
                  <li>New features or services</li>
                  <li>Legal or regulatory requirements</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">How We Notify You:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We will update the &quot;Last Updated&quot; date at the top of this policy</li>
                  <li>For material changes, we will notify you via in-app message or push notification</li>
                  <li>Continued use of Luna after changes constitutes acceptance of the updated policy</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Your Options:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>If you do not agree to the updated policy, stop using Luna and delete your account</li>
                  <li>You can always review the current Privacy Policy on this page</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground mb-4">If you have questions, concerns, or requests regarding this Privacy Policy or your data:</p>
                <ul className="list-none space-y-1 text-muted-foreground">
                  <li><strong>Email:</strong> info@lunanoise.tech</li>
                  <li><strong>Subject Line:</strong> Privacy Request - Luna App</li>
                  <li><strong>Response Time:</strong> We will respond within 30 days</li>
                </ul>
                <p className="text-muted-foreground mt-4">For Specific Requests:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Data deletion: Use in-app &quot;Delete Account&quot; feature or email us</li>
                  <li>Data access: Email us with your anonymous ID (found in &quot;You&quot; tab &rarr; &quot;Profile&quot;)</li>
                  <li>General questions: Email us anytime</li>
                </ul>
                <p className="text-muted-foreground mt-4">Mailing Address:</p>
                <p className="text-muted-foreground">Luna App<br />Dallas, Texas, United States</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">12. Your Consent</h2>
                <p className="text-muted-foreground mb-2">By using Luna, you consent to:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>The collection and use of information as described in this Privacy Policy</li>
                  <li>The storage of anonymous data on U.S. servers (Supabase)</li>
                  <li>Local notifications scheduled on your device</li>
                  <li>Our Terms and Conditions (incorporated by reference)</li>
                </ul>
                <p className="text-muted-foreground mt-4">You can withdraw consent at any time by:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Deleting your account (in-app or via email)</li>
                  <li>Uninstalling the app</li>
                  <li>Disabling notifications in app or device settings</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">13. Summary of Key Points</h2>
                
                <h4 className="font-medium text-foreground mt-4 mb-2">What We Collect:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Anonymous onboarding preferences (server-side)</li>
                  <li>Sleep logs and usage data (device-only)</li>
                  <li>Device info for support (no identifiers)</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">What We DON&apos;T Collect:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Email, phone number, or contact info (unless you provide it in feedback)</li>
                  <li>Payment or billing information (handled by Apple/Google)</li>
                  <li>Location, IP address, or advertising IDs</li>
                  <li>Audio recordings or microphone access</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">How We Use It:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Improve Luna and recommend sounds</li>
                  <li>Send local notifications (if enabled)</li>
                  <li>Respond to feedback and fix bugs</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Your Rights:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Access your local data in-app</li>
                  <li>Delete all data anytime</li>
                  <li>Opt-out of notifications</li>
                  <li>Request information about our practices</li>
                </ul>

                <h4 className="font-medium text-foreground mt-4 mb-2">Security:</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>HTTPS encryption for data transmission</li>
                  <li>Secure cloud storage (Supabase, U.S.)</li>
                  <li>Local data encrypted on your device</li>
                </ul>
              </section>

              <p className="text-muted-foreground mt-8 pt-8 border-t border-border">
                Thank you for trusting Luna with your sleep. We are committed to protecting your privacy.
              </p>
              <p className="text-muted-foreground text-sm">
                Last Updated: January 29, 2026<br />
                Version: 1.0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/luna-logo.png"
                alt="Luna owl mascot"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-foreground tracking-tight">Luna</span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/privacy" className="text-foreground font-medium text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms of Service
              </Link>
              <a href="mailto:info@lunanoise.tech" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Support
              </a>
            </nav>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            Luna: Sleep Sounds — White Noise for Better Sleep
          </p>
        </div>
      </footer>
    </main>
  )
}
