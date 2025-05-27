import SwiftUI

struct TermsOfServiceView: View {
    @Binding var isPresented: Bool
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    Group {
                        Text("Terms of Service")
                            .font(.title)
                            .fontWeight(.bold)
                        
                        Text("Last updated: April 2025")
                            .foregroundColor(.secondary)
                        
                        Text("Please read these Terms of Service (\"Terms\") carefully before using the ColorCrafter mobile application (the \"App\") operated by MyLogix Studio LLC (\"us\", \"we\", or \"our\").")
                            .fixedSize(horizontal: false, vertical: true)
                        
                        Text("By accessing or using the App, you agree to be bound by these Terms. If you disagree with any part of the Terms, you do not have permission to access the App.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("1. Acceptance of Terms")
                            .font(.headline)
                        Text("By accessing and using ColorCrafter, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the App following any changes constitutes your acceptance of the revised Terms.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("2. License and Usage")
                            .font(.headline)
                        Text("• We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial purposes.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• You may not modify, adapt, reverse engineer, decompile, or disassemble the App or any part thereof.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• You may not create derivative works based on the App or its content.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• You may not use the App for any illegal or unauthorized purpose.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• You may not use the App in any manner that could damage, disable, overburden, or impair our servers or networks.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("3. User Content")
                            .font(.headline)
                        Text("• You retain all rights to the images you upload to the App.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• You grant us a non-exclusive, worldwide, royalty-free license to use, process, modify, and store your uploaded images solely for the purpose of providing our services to you. Images are not permanently stored after processing is complete.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• You are solely responsible for the content of images you upload and must ensure you have all necessary rights and permissions to use such content.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• You agree not to upload any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, invasive of another's privacy, or otherwise objectionable.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("4. Subscription Terms")
                            .font(.headline)
                        Text("• Some features of the App are available only with a paid subscription.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Subscriptions are processed entirely through Apple's App Store and managed by StoreKit.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• We do not collect or store your payment information, as all transactions are handled by Apple.")
                            .foregroundColor(.blue)
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• You can manage and cancel your subscription through your Apple ID account settings.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Payment will be charged to your Apple ID account at confirmation of purchase and upon renewal.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Any unused portion of a free trial period will be forfeited when you purchase a subscription.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Refunds are subject to Apple's App Store policies.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("5. Privacy and Data")
                            .font(.headline)
                        Text("• The App does not require user accounts or registration.")
                            .foregroundColor(.blue)
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• We do not collect personal information such as names or email addresses.")
                            .foregroundColor(.blue)
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Image data is temporarily processed on our servers but not permanently stored.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• App preferences are stored locally on your device.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• For complete details about our data practices, please refer to our Privacy Policy.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("6. Service Limitations")
                            .font(.headline)
                        Text("• Free tier has limited features and processing capabilities.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• We reserve the right to modify, suspend, or discontinue the App or any part thereof at any time with or without notice.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• We are not responsible for delays or failures in performance resulting from causes beyond our control.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• We may impose usage limits, reduce functionality, or terminate your access to the App at our sole discretion.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("7. Intellectual Property")
                            .font(.headline)
                        Text("• The App, including all content, features, and functionality, is owned by MyLogix Studio LLC and is protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• ColorCrafter is a trademark of MyLogix Studio LLC.")
                            .fixedSize(horizontal: false, vertical: true)
                        Text("• Paint-by-numbers templates generated by the App are for personal use only. Commercial use of generated templates is prohibited without explicit written permission.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("8. Disclaimer of Warranties")
                            .font(.headline)
                        Text("THE APP IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OR COURSE OF PERFORMANCE.")
                            .font(.caption)
                            .fixedSize(horizontal: false, vertical: true)
                        
                        Text("MyLogix Studio LLC DOES NOT WARRANT THAT: (A) THE APP WILL FUNCTION UNINTERRUPTED, SECURE OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (B) ANY ERRORS OR DEFECTS WILL BE CORRECTED; (C) THE APP IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (D) THE RESULTS OF USING THE APP WILL MEET YOUR REQUIREMENTS.")
                            .font(.caption)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("9. Limitation of Liability")
                            .font(.headline)
                        Text("IN NO EVENT SHALL MyLogix Studio LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE APP.")
                            .font(.caption)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("10. Governing Law")
                            .font(.headline)
                        Text("These Terms shall be governed by and construed in accordance with the laws of the United States and the State of California, without regard to its conflict of law provisions. Any dispute arising from or relating to these Terms or your use of the App shall be subject to the exclusive jurisdiction of the state and federal courts located in California.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("11. Severability")
                            .font(.headline)
                        Text("If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.")
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    
                    Group {
                        Text("12. Contact Us")
                            .font(.headline)
                        Text("If you have any questions about these Terms of Service, please contact us at:")
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
            .navigationTitle("Terms of Service")
        }
    }
} 
