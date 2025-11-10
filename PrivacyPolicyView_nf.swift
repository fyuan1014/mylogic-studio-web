//
//  PrivacyPolicyView.swift
//  VisionCrafter
//

import SwiftUI

struct PrivacyPolicyView: View {
    @Environment(\.dismiss) var dismiss
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    Text("Privacy Policy")
                        .font(.title.bold())
                    
                    Text("Last Updated: November 2024")
                        .font(.caption)
                        .foregroundColor(.secondary)
                    
                    Group {
                        SectionTitle("1. Information We Collect")
                        BodyText("NarrativeFlow does NOT collect, store, or transmit any personal information. We respect your privacy and operate on a no-data-collection basis.")
                        
                        SectionTitle("2. Data Storage")
                        BodyText("• All images and content are processed on our servers temporarily\n• Files are automatically deleted after 2 hours\n• We do not retain any user-generated content\n• No personal information is stored")
                        
                        SectionTitle("3. Third-Party Services")
                        BodyText("We use the following third-party services for app functionality:\n\n• Apple In-App Purchase (subscription management)\n• Hugging Face API (for all AI image generation, editing, and text processing)\n• Google Cloud Text-to-Speech API (for audio generation)\n• MoviePy (for video compilation and processing)\n\nAll AI processing is done temporarily on our servers and files are automatically deleted after 2 hours. These third-party services have their own privacy policies that you can review on their respective websites.")
                        
                        SectionTitle("4. Children's Privacy")
                        BodyText("Our app does not knowingly collect information from children under 13. The app is intended for general audiences.")
                        
                        SectionTitle("5. Your Rights")
                        BodyText("Since we don't collect personal data, there is no data to access, modify, or delete. Your content is automatically removed after processing.")
                        
                        SectionTitle("6. Changes to This Policy")
                        BodyText("We may update this policy occasionally. Continued use of the app constitutes acceptance of any changes.")
                        
                        SectionTitle("7. Contact Us")
                        BodyText("For questions about this privacy policy, please contact us at:\n\nMyLogix Studio LLC\n\nEmail: mls@mylogicstudio.com")
                    }
                }
                .padding()
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("common.done".localized) {
                        dismiss()
                    }
                }
            }
        }
    }
}

// MARK: - Helper Views
private struct SectionTitle: View {
    let text: String
    
    init(_ text: String) {
        self.text = text
    }
    
    var body: some View {
        Text(text)
            .font(.headline)
            .padding(.top, 8)
    }
}

private struct BodyText: View {
    let text: String
    
    init(_ text: String) {
        self.text = text
    }
    
    var body: some View {
        Text(text)
            .font(.body)
            .foregroundColor(.primary)
    }
}

#Preview {
    PrivacyPolicyView()
}

