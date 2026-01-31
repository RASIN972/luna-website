import Image from "next/image"
import Link from "next/link"

export default function TermsPage() {
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
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2 tracking-tight">Terms and Conditions</h1>
            <p className="text-muted-foreground mb-8">Last Updated: January 29, 2026</p>
            
            <div className="prose prose-invert max-w-none space-y-8 text-foreground">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Luna. These Terms and Conditions (&quot;Terms&quot;) govern your use of the Luna mobile application (&quot;App&quot;) operated by Luna App (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By downloading, installing, or using Luna, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.
              </p>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-2">By accessing or using Luna, you confirm that:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>You have read and understood these Terms</li>
                  <li>You agree to comply with these Terms</li>
                  <li>You are legally capable of entering into binding contracts</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground mb-2">Luna is a white noise and sleep sounds mobile application designed to help users fall asleep and improve sleep quality. The App provides:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Access to sleep sounds and white noise audio</li>
                  <li>Playback controls and timer functionality</li>
                  <li>Sleep tracking and habit-building features</li>
                  <li>Personalized sound recommendations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Subscription and Payment Terms</h2>
                
                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.1 Free Trial</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Luna offers a <strong>3-day free trial</strong> with full access to premium features</li>
                  <li>The trial begins when you start your subscription</li>
                  <li>You will not be charged during the trial period</li>
                  <li>You may cancel anytime during the trial without being charged</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.2 Subscription Plans</h3>
                <p className="text-muted-foreground mb-2">After the free trial, Luna offers the following subscription options:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li><strong>Monthly Subscription:</strong> $3.00 per month</li>
                  <li><strong>Annual Subscription:</strong> $15.00 per year</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.3 Auto-Renewal</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>All subscriptions automatically renew unless canceled at least 24 hours before the end of the current period</li>
                  <li>Your payment method will be charged within 24 hours prior to the start of each renewal period</li>
                  <li>Subscriptions renew at the same price unless we notify you of a price change in advance</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.4 Payment Processing</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>All payments are processed through the Apple App Store or Google Play Store</li>
                  <li>You agree to pay all fees and applicable taxes</li>
                  <li>Payment terms are subject to the App Store&apos;s or Play Store&apos;s payment policies</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.5 Cancellation</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>You may cancel your subscription at any time through your App Store or Play Store account settings</li>
                  <li>Cancellation takes effect at the end of the current billing period</li>
                  <li>You will retain access to premium features until the end of your paid subscription period</li>
                  <li>No refunds are provided for partial subscription periods</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.6 Refunds</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Refund requests are subject to the Apple App Store or Google Play Store refund policies</li>
                  <li>We do not provide direct refunds outside of the App Store/Play Store refund processes</li>
                  <li>Contact Apple or Google directly for refund requests</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">3.7 Price Changes</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We reserve the right to change subscription prices at any time</li>
                  <li>Price changes will not affect your current subscription period</li>
                  <li>You will be notified of price changes before your next renewal</li>
                  <li>Continuing your subscription after a price change constitutes acceptance of the new price</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. User Accounts and Data</h2>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.1 Account Creation</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>No account is required to use basic features of Luna</li>
                  <li>Premium features require an active subscription through the App Store or Play Store</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.2 Data Collection</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We collect anonymized onboarding responses (sleep issues, preferences, sound choices) to improve the App</li>
                  <li>This data cannot be linked to your identity</li>
                  <li>We do not collect email addresses, names, or personally identifiable information</li>
                  <li>All data collection is governed by our Privacy Policy</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">4.3 Account Deletion</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>You may request deletion of your data at any time by contacting us at info@lunanoise.tech</li>
                  <li>Upon deletion request, we will remove all associated data within 30 days</li>
                  <li>Deletion does not entitle you to a refund for any active subscription</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Acceptable Use</h2>
                <p className="text-muted-foreground mb-2">You agree to use Luna only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Use the App in any way that violates applicable laws or regulations</li>
                  <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
                  <li>Remove or modify any copyright, trademark, or other proprietary notices</li>
                  <li>Use automated systems (bots, scrapers) to access the App</li>
                  <li>Interfere with or disrupt the App&apos;s functionality or servers</li>
                  <li>Upload or transmit viruses or malicious code</li>
                  <li>Attempt to gain unauthorized access to the App or related systems</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">6.1 Ownership</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Luna, including all content, features, audio files, graphics, logos, and functionality, is owned by Luna App</li>
                  <li>All intellectual property rights are reserved</li>
                  <li>Luna is protected by copyright, trademark, and other intellectual property laws</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">6.2 Limited License</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We grant you a limited, non-exclusive, non-transferable, revocable license to use Luna for personal, non-commercial purposes</li>
                  <li>This license does not grant you any ownership rights to the App or its content</li>
                  <li>You may not copy, modify, distribute, sell, or lease any part of the App</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">6.3 Audio Content</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>All audio files, sounds, and music available in Luna are owned or licensed by Luna App</li>
                  <li>You may not extract, download (except for offline playback within the App), or redistribute any audio content</li>
                  <li>Audio content is licensed for personal use within the App only</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Disclaimers and Limitations of Liability</h2>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">7.1 Medical Disclaimer</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Luna is NOT a medical device and is not intended to diagnose, treat, cure, or prevent any disease or medical condition</li>
                  <li>Luna is designed for general wellness and relaxation purposes only</li>
                  <li>If you have a sleep disorder or medical condition, consult a healthcare professional</li>
                  <li>Do not rely on Luna as a substitute for professional medical advice</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">7.2 &quot;As Is&quot; Basis</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Luna is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied</li>
                  <li>We do not guarantee that the App will be uninterrupted, error-free, or secure</li>
                  <li>We do not warrant that the App will meet your specific requirements or expectations</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">7.3 Limitation of Liability</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>To the maximum extent permitted by law, Luna App shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>This includes damages for loss of profits, data, use, or other intangible losses</li>
                  <li>Our total liability to you for any claims arising from your use of Luna shall not exceed the amount you paid us in the 12 months prior to the claim</li>
                  <li>Some jurisdictions do not allow certain liability exclusions, so these limitations may not apply to you</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">7.4 Third-Party Services</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Luna may integrate with third-party services (App Store, analytics providers)</li>
                  <li>We are not responsible for the availability, accuracy, or content of third-party services</li>
                  <li>Your use of third-party services is governed by their respective terms and privacy policies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Privacy</h2>
                <p className="text-muted-foreground">
                  Your use of Luna is also governed by our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our data practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">9. Children&apos;s Privacy</h2>
                <p className="text-muted-foreground mb-2">Luna is available for use by individuals of all ages. However:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We do not knowingly collect personal information from children under 13 without parental consent</li>
                  <li>If you are a parent or guardian and believe your child has provided us with personal information, please contact us</li>
                  <li>We comply with the Children&apos;s Online Privacy Protection Act (COPPA) where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">10. Modifications to the App and Terms</h2>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">10.1 App Changes</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We reserve the right to modify, suspend, or discontinue any part of Luna at any time without notice</li>
                  <li>We may add or remove features, sounds, or functionality</li>
                  <li>We are not liable for any modifications, suspensions, or discontinuations</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">10.2 Terms Changes</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We may update these Terms from time to time</li>
                  <li>We will notify you of material changes by updating the &quot;Last Updated&quot; date at the top of these Terms</li>
                  <li>Continued use of Luna after changes constitutes acceptance of the new Terms</li>
                  <li>If you do not agree to updated Terms, you must stop using Luna and cancel your subscription</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">11. Termination</h2>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">11.1 Termination by You</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>You may stop using Luna at any time</li>
                  <li>You may cancel your subscription through the App Store or Play Store</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">11.2 Termination by Us</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>We reserve the right to suspend or terminate your access to Luna at any time, with or without cause</li>
                  <li>Reasons for termination may include violation of these Terms, fraudulent activity, or abusive behavior</li>
                  <li>Upon termination, your right to use Luna immediately ceases</li>
                  <li>Termination does not entitle you to a refund</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">11.3 Effect of Termination</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Upon termination, all licenses granted to you under these Terms will immediately cease</li>
                  <li>Provisions that should survive termination (including disclaimers, limitations of liability, and dispute resolution) will remain in effect</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">12. Governing Law and Dispute Resolution</h2>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">12.1 Governing Law</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>These Terms are governed by the laws of the State of Texas, United States, without regard to conflict of law principles</li>
                  <li>Any legal action or proceeding relating to these Terms shall be brought exclusively in the courts located in Dallas County, Texas</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">12.2 Dispute Resolution</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Before filing any legal action, you agree to attempt to resolve disputes informally by contacting us at info@lunanoise.tech</li>
                  <li>If a dispute cannot be resolved informally within 30 days, either party may pursue legal action</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">12.3 Class Action Waiver</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>You agree to resolve disputes with us on an individual basis only</li>
                  <li>You waive your right to participate in class actions, class arbitrations, or representative actions</li>
                  <li>This waiver does not apply where prohibited by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">13. Miscellaneous</h2>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">13.1 Entire Agreement</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>These Terms, together with our Privacy Policy, constitute the entire agreement between you and Luna App regarding the use of Luna</li>
                  <li>These Terms supersede any prior agreements or understandings</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">13.2 Severability</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect</li>
                  <li>Invalid provisions will be modified to the minimum extent necessary to make them valid and enforceable</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">13.3 Waiver</h3>
                <p className="text-muted-foreground">
                  Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or our right to enforce it in the future.
                </p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">13.4 Assignment</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>You may not assign or transfer these Terms or your rights under these Terms without our prior written consent</li>
                  <li>We may assign these Terms without restriction</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">13.5 Force Majeure</h3>
                <p className="text-muted-foreground">
                  We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable control (natural disasters, war, pandemics, etc.)
                </p>

                <h3 className="text-lg font-medium text-foreground mt-6 mb-3">13.6 Export Compliance</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>You agree to comply with all applicable export and import laws and regulations</li>
                  <li>You will not use Luna in any country subject to U.S. embargo or export restrictions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">14. Contact Information</h2>
                <p className="text-muted-foreground mb-4">If you have questions about these Terms, please contact us:</p>
                <p className="text-muted-foreground">
                  <strong>Luna App</strong><br />
                  Email: info@lunanoise.tech<br />
                  Address: Dallas, Texas, United States
                </p>
                <p className="text-muted-foreground mt-4">
                  For subscription and billing issues, please contact Apple App Store or Google Play Store support directly.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">15. Acknowledgment</h2>
                <p className="text-muted-foreground mb-2">By using Luna, you acknowledge that:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>You have read and understood these Terms</li>
                  <li>You agree to be bound by these Terms</li>
                  <li>You understand that Luna is not a medical device</li>
                  <li>You are responsible for compliance with all applicable laws in your jurisdiction</li>
                </ul>
              </section>

              <p className="text-muted-foreground mt-8 pt-8 border-t border-border">
                Thank you for using Luna. Sleep well.
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
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-foreground font-medium text-sm">
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
