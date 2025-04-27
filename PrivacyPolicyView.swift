import SwiftUI

struct PrivacyPolicyView: View {
    @Binding var isPresented: Bool
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    Group {
                        Text("Privacy Policy")
                            .font(.title)
                            .fontWeight(.bold)
                        
                        Text("Last updated: April 2025")
                            .foregroundColor(.secondary)
                            
                        Text("MyLogic Studio LLC (\"we\", \"our\", or \"us\") operates the ColorCrafter mobile application (the \"App\"). This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our App and the choices you have associated with that data.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("1. Information We Collect")
                            .font(.headline)
                        Text("We collect the following types of information:")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Images you upload for processing")
                        Text("• Account information (email address for registered users)")
                        Text("• Usage data (features used, time spent in the app)")
                        Text("• Device information (device type, OS version)")
                        Text("• Subscription status and purchase history")
                        Text("• User preferences and settings")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("2. How We Use Your Information")
                            .font(.headline)
                        Text("We use your information to:")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Process your images and create paint-by-numbers templates")
                        Text("• Authenticate your identity and manage your account")
                        Text("• Process transactions and manage subscriptions")
                        Text("• Personalize your experience and remember preferences")
                        Text("• Improve our App through analytics and user feedback")
                        Text("• Communicate with you regarding service updates")
                        Text("• Protect against fraudulent or unauthorized activity")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("3. Data Storage and Security")
                            .font(.headline)
                        Text("• Images are processed on our secure servers and are not permanently stored after processing is complete")
                        Text("• We implement appropriate technical and organizational measures to protect your personal data")
                        Text("• We use industry-standard encryption for data transmission")
                        Text("• Your subscription data is handled securely through Apple's StoreKit")
                        Text("• We retain your data only as long as necessary to provide services to you")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("4. Third-Party Services")
                            .font(.headline)
                        Text("We use the following third-party services:")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Apple App Store for distribution and payments")
                        Text("• Apple StoreKit for subscription management")
                        Text("• Heroku for server hosting and image processing")
                        Text("• PostgreSQL for database storage")
                        
                        Text("Each third-party service has its own Privacy Policy governing how they handle your data. We recommend reviewing their policies as well.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("5. Your Legal Rights")
                            .font(.headline)
                        Text("Depending on your location, you may have certain rights regarding your personal information:")
                            .fixedSize(horizontal: false, vertical: true)
                        
                        Text("• Right to Access: You can request copies of your personal data.")
                        Text("• Right to Rectification: You can request that we correct inaccurate information.")
                        Text("• Right to Erasure: You can request that we delete your personal data.")
                        Text("• Right to Restrict Processing: You can request that we restrict processing of your data.")
                        Text("• Right to Data Portability: You can request transfer of your data.")
                        Text("• Right to Object: You can object to our processing of your personal data.")
                            .fixedSize(horizontal: false, vertical: true)
                            
                        Text("California Residents: Under the California Consumer Privacy Act (CCPA), California residents have specific rights regarding personal information. You have the right to know what personal information we collect, disclose, or sell, and the right to request deletion of personal information.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("6. Children's Privacy")
                            .font(.headline)
                        Text("Our App is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("7. Changes to This Privacy Policy")
                            .font(.headline)
                        Text("We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date. You are advised to review this Privacy Policy periodically for any changes.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("8. Contact Us")
                            .font(.headline)
                        Text("If you have any questions about this Privacy Policy or our data practices, please contact us at:")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("MyLogic Studio LLC")
                        Text("Email: mls@mylogicstudio.com")
                    }
                }
                .padding()
            }
            .navigationBarItems(trailing: Button("Close") {
                isPresented = false
            })
            .navigationTitle("Privacy Policy")
        }
    }
} 
