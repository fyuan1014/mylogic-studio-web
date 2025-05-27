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
                            
                        Text("MyLogix Studio LLC (\"we\", \"our\", or \"us\") operates the ColorCrafter mobile application (the \"App\"). This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of data when you use our App and the choices you have associated with that data.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("1. Information We Collect")
                            .font(.headline)
                        Text("We collect the following types of information:")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Images you upload for processing")
                        Text("• Usage data (app features used, time spent in the app)")
                        Text("• Device information (device type, OS version)")
                        Text("• Subscription status through Apple's StoreKit")
                        Text("• App preferences and settings stored locally on your device")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("We do not collect personal information such as names, email addresses, or maintain user accounts.")
                            .fontWeight(.medium)
                            .foregroundColor(.blue)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("2. How We Use Your Information")
                            .font(.headline)
                        Text("We use your information to:")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Process your images and create paint-by-numbers templates")
                        Text("• Verify your subscription status via Apple's StoreKit")
                        Text("• Personalize your experience and store preferences on your device")
                        Text("• Improve our App through anonymous usage analytics")
                        Text("• Protect against fraudulent activity")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("3. Data Storage and Security")
                            .font(.headline)
                        Text("• Images are processed on our secure servers and are not permanently stored after processing is complete")
                        Text("• We implement appropriate technical measures to protect your data during processing")
                        Text("• We use industry-standard encryption for data transmission")
                        Text("• Your subscription data is handled entirely by Apple through StoreKit")
                        Text("• No user account database is maintained")
                        Text("• App preferences are stored locally on your device")
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
                        
                        Text("Each third-party service has its own Privacy Policy governing how they handle data. We recommend reviewing their policies as well.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("5. Your Legal Rights")
                            .font(.headline)
                        Text("Since we don't collect or store personal information, most data privacy rights regarding data access, modification, or deletion don't apply directly. However, you still have the right to:")
                            .fixedSize(horizontal: false, vertical: true)
                        
                        Text("• Delete the app and all locally stored preferences")
                        Text("• Manage your subscription through your Apple ID account settings")
                        Text("• Request that any of your images in processing be deleted")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("6. Children's Privacy")
                            .font(.headline)
                        Text("Our App is not intended for use by children under the age of 17. We do not knowingly collect information from children under 17. The app is accessible without creating accounts, and Apple's family controls can be used to manage access to the app and prevent in-app purchases.")
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
                        Text("MyLogix Studio LLC")
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
