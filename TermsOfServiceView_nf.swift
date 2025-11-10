//
//  TermsOfServiceView.swift
//  VisionCrafter
//

import SwiftUI

struct TermsOfServiceView: View {
    @Environment(\.dismiss) var dismiss
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    Text("Terms of Service")
                        .font(.title.bold())
                    
                    Text("Last Updated: November 2024")
                        .font(.caption)
                        .foregroundColor(.secondary)
                    
                    Group {
                        SectionTitle("1. Acceptance of Terms")
                        BodyText("By using NarrativeFlow, you agree to these Terms of Service. If you do not agree, please do not use the app.")
                        
                        SectionTitle("2. Service Description")
                        BodyText("NarrativeFlow provides AI-powered tools for image generation, editing, and video creation. The service is provided by MyLogix Studio LLC.")
                        
                        SectionTitle("3. Subscriptions")
                        BodyText("• Subscriptions are billed through Apple In-App Purchase\n• Auto-renews unless cancelled 24 hours before period ends\n• Manage or cancel via iOS Settings → [Your Name] → Subscriptions\n• No refunds for unused portions\n• Prices may vary by region")
                        
                        SectionTitle("4. Acceptable Use")
                        BodyText("You agree NOT to:\n• Generate illegal, harmful, or offensive content\n• Violate intellectual property rights\n• Use the service for unauthorized commercial purposes\n• Attempt to reverse engineer or abuse the service")
                        
                        SectionTitle("5. Content Ownership")
                        BodyText("• You retain rights to content you create\n• We do not claim ownership of your generated content\n• Content is automatically deleted after 2 hours\n• You are responsible for backing up your creations")
                        
                        SectionTitle("6. Service Availability")
                        BodyText("• We strive for 99% uptime but do not guarantee uninterrupted service\n• Features may be modified or discontinued\n• Processing times may vary based on server load")
                        
                        SectionTitle("7. Limitation of Liability")
                        BodyText("MyLogix Studio LLC is not liable for:\n• Loss of content or data\n• Service interruptions\n• Third-party AI model outputs\n• Any indirect or consequential damages")
                        
                        SectionTitle("8. Termination")
                        BodyText("We reserve the right to suspend or terminate accounts that violate these terms.")
                        
                        SectionTitle("9. Changes to Terms")
                        BodyText("We may modify these terms at any time. Continued use constitutes acceptance of changes.")
                        
                        SectionTitle("10. Governing Law")
                        BodyText("These terms are governed by the laws of the United States. Disputes will be resolved through arbitration.")
                        
                        SectionTitle("11. Contact")
                        BodyText("For support or questions, contact us at:\n\nMyLogix Studio LLC\n\nEmail: mls@mylogicstudio.com")
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
    TermsOfServiceView()
}

