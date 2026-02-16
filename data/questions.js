export const questions = {
  company: [
    {
      id: 'c1',
      category: 'Strategy',
      text: "How does your cybersecurity strategy align with business objectives?",
      options: [
        { text: "It is an integral part of business planning and enables growth.", score: 5 },
        { text: "It is considered, but often seen as a compliance hurdle.", score: 3 },
        { text: "It is a separate IT function with little business interaction.", score: 1 },
        { text: "We don't have a formal strategy.", score: 0 }
      ],
      suggestion: "Integrate security into business value prop. Shift from 'blocker' to 'enabler'."
    },
    {
      id: 'c2',
      category: 'Risk Management',
      text: "How often does the organization conduct a comprehensive risk assessment?",
      options: [
        { text: "Continuously or at least quarterly.", score: 5 },
        { text: "Annually.", score: 3 },
        { text: "Ad-hoc / Only after an incident.", score: 1 },
        { text: "Never.", score: 0 }
      ],
      suggestion: "Implement a continuous risk assessment framework (e.g., NIST, ISO 27005)."
    },
    {
      id: 'c3',
      category: 'Incident Response',
      text: "Do you have an Incident Response Plan (IRP) and how often is it tested?",
      options: [
        { text: "Yes, tested regularly with simulations/tabletop exercises.", score: 5 },
        { text: "Yes, but rarely tested.", score: 3 },
        { text: "We have a plan but it's outdated.", score: 1 },
        { text: "No formal plan.", score: 0 }
      ],
      suggestion: "Regularly test your IRP with tabletop exercises to ensure readiness."
    },
    {
      id: 'c4',
      category: 'Access Control',
      text: "What is your approach to Multi-Factor Authentication (MFA)?",
      options: [
        { text: "Enforced for all users and all access points.", score: 5 },
        { text: "Enforced only for remote access or admins.", score: 3 },
        { text: "Optional for users.", score: 1 },
        { text: "Not used.", score: 0 }
      ],
      suggestion: "Enforce MFA universally. It is the single most effective control against credential theft."
    },
    {
      id: 'c5',
      category: 'Culture',
      text: "How is security awareness training conducted?",
      options: [
        { text: "Monthly/Quarterly phishing sims and interactive training.", score: 5 },
        { text: "Once a year compliance video.", score: 3 },
        { text: "Only during onboarding.", score: 1 },
        { text: "No formal training.", score: 0 }
      ],
      suggestion: "Move beyond compliance. Create a culture where every employee is a security sensor."
    },
    {
      id: 'c6',
      category: 'Risk Management',
      text: "How do you identify and protect your most critical assets?",
      options: [
        { text: "Automated asset discovery and data classification tools.", score: 5 },
        { text: "Manual inventory updated annually.", score: 3 },
        { text: "Ad-hoc knowledge held by IT staff.", score: 1 },
        { text: "We do not have a clear inventory.", score: 0 }
      ],
      suggestion: "You cannot protect what you cannot see. Implement automated asset discovery."
    },
    {
      id: 'c7',
      category: 'Metrics',
      text: "How do you report cybersecurity posture to the Board?",
      options: [
        { text: "Business-aligned KPIs (e.g., risk reduction, financial impact).", score: 5 },
        { text: "Technical metrics (e.g., number of patches, attacks blocked).", score: 3 },
        { text: "We only report when there is an incident.", score: 1 },
        { text: "We do not report to the Board.", score: 0 }
      ],
      suggestion: "Translate technical metrics into business risk and financial impact for the Board."
    },
    {
      id: 'c8',
      category: 'Third-Party Risk',
      text: "How do you manage supply chain and vendor risk?",
      options: [
        { text: "Rigorous vetting, contractual security clauses, and ongoing monitoring.", score: 5 },
        { text: "Initial questionnaire only.", score: 3 },
        { text: "We rely on vendor reputation.", score: 1 },
        { text: "We do not assess vendor risk.", score: 0 }
      ],
      suggestion: "Implement a robust Third-Party Risk Management (TPRM) program."
    },
    {
      id: 'c9',
      category: 'Recovery',
      text: "What is your disaster recovery (DR) capability?",
      options: [
        { text: "Redundant systems with tested automated failover.", score: 5 },
        { text: "Offline backups, tested annually.", score: 3 },
        { text: "Backups exist but are rarely tested.", score: 1 },
        { text: "No formal DR plan.", score: 0 }
      ],
      suggestion: "Prioritize resilience. Test your ability to recover from a ransomware attack."
    },
    {
      id: 'c10',
      category: 'Compliance',
      text: "How do you track regulatory compliance (GDPR, HIPAA, etc.)?",
      options: [
        { text: "Continuous compliance monitoring with GRC tools.", score: 5 },
        { text: "Periodic internal audits.", score: 3 },
        { text: "Spreadsheets and manual checks.", score: 1 },
        { text: "We react to audit findings only.", score: 0 }
      ],
      suggestion: "Automate compliance tracking to reduce manual overhead and risk of fines."
    },
    {
      id: 'c11',
      category: 'Cloud Security',
      text: "How is your cloud infrastructure secured?",
      options: [
        { text: "CSPM tools, enforced least privilege, and immutable infrastructure.", score: 5 },
        { text: "Standard provider defaults with some customization.", score: 3 },
        { text: "Open access for developers to move fast.", score: 1 },
        { text: "We don't use cloud / Not applicable.", score: 3 }
      ],
      suggestion: "Misconfiguration is the #1 cloud risk. Use CSPM tools to automate security."
    },
    {
      id: 'c12',
      category: 'Budget',
      text: "How is the cybersecurity budget determined?",
      options: [
        { text: "Based on risk assessment and strategic goals.", score: 5 },
        { text: "Percentage of IT spend.", score: 3 },
        { text: "Flat amount based on last year.", score: 1 },
        { text: "No dedicated budget.", score: 0 }
      ],
      suggestion: "Align budget with risk. Invest in capabilities, not just tools."
    },
    {
      id: 'c13',
      category: 'Threat Intel',
      text: "How does your organization use threat intelligence?",
      options: [
        { text: "Integrated into SIEM/SOAR for proactive blocking.", score: 5 },
        { text: "Read by analysts to inform manual changes.", score: 3 },
        { text: "Ad-hoc reading of news.", score: 1 },
        { text: "We do not use threat intelligence.", score: 0 }
      ],
      suggestion: "Operationalize threat intel. Don't just read it; use it to block threats automatically."
    },
    {
      id: 'c14',
      category: 'Insider Threat',
      text: "How do you mitigate insider threats?",
      options: [
        { text: "UEBA (User Entity Behavior Analytics) and strict DLP.", score: 5 },
        { text: "Access logs review and background checks.", score: 3 },
        { text: "Trust policy.", score: 1 },
        { text: "We do not monitor for insider threats.", score: 0 }
      ],
      suggestion: "Trust but verify. Monitoring user behavior is key to catching insider malice or negligence."
    },
    {
      id: 'c15',
      category: 'App Security',
      text: "How is security integrated into software development (DevSecOps)?",
      options: [
        { text: "Automated SAST/DAST in CI/CD pipelines.", score: 5 },
        { text: "Penetration testing before major releases.", score: 3 },
        { text: "Ad-hoc code reviews.", score: 1 },
        { text: "Security is an afterthought.", score: 0 }
      ],
      suggestion: "Shift left. Fix vulnerabilities in code before they reach production."
    },
    {
      id: 'c16',
      category: 'Shadow IT',
      text: "How do you handle Shadow IT (unauthorized apps/devices)?",
      options: [
        { text: "CASB usage to monitor and control cloud app usage.", score: 5 },
        { text: "Policy forbidding it, but no technical blocks.", score: 3 },
        { text: "We ignore it.", score: 1 },
        { text: "We encourage users to use whatever works.", score: 0 }
      ],
      suggestion: "You can't stop SaaS adoption. Use a CASB to secure it."
    },
    {
      id: 'c17',
      category: 'Endpoints',
      text: "What is your endpoint protection strategy?",
      options: [
        { text: "EDR/MDR on all endpoints with 24/7 monitoring.", score: 5 },
        { text: "Standard Antivirus.", score: 3 },
        { text: "OS default security (e.g., Defender) without management.", score: 1 },
        { text: "None.", score: 0 }
      ],
      suggestion: "Antivirus is dead. You need EDR to detect behavioral threats."
    },
    {
      id: 'c18',
      category: 'Data Privacy',
      text: "How is customer data privacy managed?",
      options: [
        { text: "Privacy by design, strict data minimization, and encryption.", score: 5 },
        { text: "Compliance with local laws only.", score: 3 },
        { text: "We collect everything and secure it later.", score: 1 },
        { text: "No specific privacy focus.", score: 0 }
      ],
      suggestion: "Privacy is a differentiator. Collect less, protect more."
    },
    {
      id: 'c19',
      category: 'Leadership',
      text: "Does the CISO have a seat at the executive table?",
      options: [
        { text: "Yes, reports directly to CEO/COO.", score: 5 },
        { text: "Reports to CIO.", score: 3 },
        { text: "Reports to IT Director.", score: 1 },
        { text: "No CISO role.", score: 0 }
      ],
      suggestion: "Security is a business issue. The CISO needs direct executive access."
    },
    {
      id: 'c20',
      category: 'Resilience',
      text: "Have you defined a risk appetite statement?",
      options: [
        { text: "Yes, approved by the Board and guides all decisions.", score: 5 },
        { text: "Drafted but not widely used.", score: 3 },
        { text: "No, we try to stop all risks.", score: 1 },
        { text: "What is risk appetite?", score: 0 }
      ],
      suggestion: "You cannot stop all risks. Define what you are willing to accept to move fast."
    }
  ],
  employee: [
    {
      id: 'e1',
      category: 'Phishing',
      text: "You receive an email from the CEO asking for urgent gift cards. What do you do?",
      options: [
        { text: "Verify the sender via a separate channel (call/text).", score: 5 },
        { text: "Reply asking for clarification.", score: 1 },
        { text: "Buy the cards immediately.", score: 0 },
        { text: "Forward to a colleague.", score: 2 }
      ],
      suggestion: "CEO fraud is common. Always verify urgent requests out of band."
    },
    {
      id: 'e2',
      category: 'Password Safety',
      text: "Which of these is the strongest password practice?",
      options: [
        { text: "Unique, long passphrase (16+ chars) for every account.", score: 5 },
        { text: "Complex password changed every 3 months.", score: 3 },
        { text: "Using 'Password123!' so I don't forget.", score: 0 },
        { text: "Writing passwords on a sticky note.", score: 1 }
      ],
      suggestion: "Use a Password Manager. Length > Complexity. Never reuse passwords."
    },
    {
      id: 'e3',
      category: 'Device Safety',
      text: "You find a USB drive in the parking lot. What do you do?",
      options: [
        { text: "Do not touch it. Report to Security.", score: 5 },
        { text: "Plug it in to find the owner.", score: 0 },
        { text: "Take it home to check.", score: 0 },
        { text: "Throw it in the trash.", score: 3 }
      ],
      suggestion: "USB drives can carry malware. Curiosity killed the cat (and the network)."
    },
    {
      id: 'e4',
      category: 'Remote Work',
      text: "Working from a coffee shop. What is required?",
      options: [
        { text: "Use Company VPN.", score: 5 },
        { text: "Connect to free Wi-Fi.", score: 0 },
        { text: "Use phone hotspot.", score: 4 },
        { text: "Ask barista for password.", score: 1 }
      ],
      suggestion: "Public Wi-Fi is unsafe. Always encrypt your traffic with a VPN."
    },
    {
      id: 'e5',
      category: 'Updates',
      text: "Your laptop prompts for a security update.",
      options: [
        { text: "Install immediately.", score: 5 },
        { text: "Remind me tomorrow.", score: 1 },
        { text: "Ignore indefinitely.", score: 0 },
        { text: "Disable updates.", score: 0 }
      ],
      suggestion: "Patching is the #1 defense against exploits. Do it now."
    },
    {
      id: 'e6',
      category: 'Phishing',
      text: "An email has a link to 'reset your password'.",
      options: [
        { text: "Hover over the link to verify the URL.", score: 5 },
        { text: "Click it immediately.", score: 0 },
        { text: "Reply to ask if it's real.", score: 1 },
        { text: "Ignore it.", score: 3 }
      ],
      suggestion: "Inspect URLs before clicking. When in doubt, go to the site directly."
    },
    {
      id: 'e7',
      category: 'Social Engineering',
      text: "A 'Tech Support' caller needs your password to fix a virus.",
      options: [
        { text: "Hang up. IT will never ask for your password.", score: 5 },
        { text: "Give it to them.", score: 0 },
        { text: "Ask for their name first.", score: 1 },
        { text: "Tell them to wait.", score: 2 }
      ],
      suggestion: "Legitimate support will never ask for your password."
    },
    {
      id: 'e8',
      category: 'Physical Security',
      text: "You are leaving your desk for lunch.",
      options: [
        { text: "Lock your computer screen.", score: 5 },
        { text: "Leave it open.", score: 0 },
        { text: "Turn off the monitor.", score: 1 },
        { text: "Ask a neighbor to watch it.", score: 3 }
      ],
      suggestion: "Win+L (Windows) or Cmd+Ctrl+Q (Mac). Lock it before you leave it."
    },
    {
      id: 'e9',
      category: 'Data Protection',
      text: "You need to send sensitive PII to a client.",
      options: [
        { text: "Use an encrypted email or secure file transfer.", score: 5 },
        { text: "Send via standard email.", score: 0 },
        { text: "Put it in a PDF.", score: 1 },
        { text: "Upload to personal Dropbox.", score: 0 }
      ],
      suggestion: "Email is not secure. Use encryption for sensitive data."
    },
    {
      id: 'e10',
      category: 'Reporting',
      text: "You think you clicked a phishing link.",
      options: [
        { text: "Report it to IT immediately.", score: 5 },
        { text: "Close the browser and hope for the best.", score: 0 },
        { text: "Run a virus scan yourself.", score: 2 },
        { text: "Ask a friend.", score: 1 }
      ],
      suggestion: "Speed matters. Reporting fast can stop a breach."
    },
    {
      id: 'e11',
      category: 'Mobile',
      text: "Installing an app on your work phone.",
      options: [
        { text: "Only from approved Company Store / App Store.", score: 5 },
        { text: "Sideload form a website.", score: 0 },
        { text: "Any app from the official store.", score: 3 },
        { text: "If it's free, it's fine.", score: 0 }
      ],
      suggestion: "Malicious apps are common. Stick to approved sources."
    },
    {
      id: 'e12',
      category: 'Social Media',
      text: "Posting a picture of your desk on LinkedIn.",
      options: [
        { text: "Check for visible screens, passwords, or badges.", score: 5 },
        { text: "Post it directly.", score: 0 },
        { text: "Blur your face only.", score: 1 },
        { text: "Crop it slightly.", score: 2 }
      ],
      suggestion: "Clean desk policy applies to photos too. Don't leak intel."
    },
    {
      id: 'e13',
      category: 'Access',
      text: "A colleague forgot their badge and asks you to let them in.",
      options: [
        { text: "Direct them to security/reception.", score: 5 },
        { text: "Let them in, I know them.", score: 0 },
        { text: "Let them in but watch them.", score: 1 },
        { text: "Ignore them.", score: 3 }
      ],
      suggestion: "No Tailgating. Social engineers rely on politeness."
    },
    {
      id: 'e14',
      category: 'Browsing',
      text: "Browser warning says 'Connection Not Private'.",
      options: [
        { text: "Close the tab. Do not proceed.", score: 5 },
        { text: "Click 'Advanced' -> 'Proceed Anyway'.", score: 0 },
        { text: "Reload the page.", score: 1 },
        { text: "Try a different browser.", score: 1 }
      ],
      suggestion: "Certificate warnings create opportunities for interception. Heed them."
    },
    {
      id: 'e15',
      category: 'BYOD',
      text: "Using personal laptop for work.",
      options: [
        { text: "Only via secure VDI/Citrix environment.", score: 5 },
        { text: "Download files to desktop.", score: 0 },
        { text: "Email files to personal email.", score: 0 },
        { text: "Use Google Drive.", score: 1 }
      ],
      suggestion: "Keep work data on work systems. Unmanaged devices are risky."
    },
    {
      id: 'e16',
      category: 'Passwords',
      text: "How many accounts share your LinkedIn password?",
      options: [
        { text: "None. It's unique.", score: 5 },
        { text: "A few minor ones.", score: 1 },
        { text: "My email and banking.", score: 0 },
        { text: "All of them.", score: 0 }
      ],
      suggestion: "Credential stuffing attacks work because people reuse passwords."
    },
    {
      id: 'e17',
      category: 'MFA',
      text: "You get an MFA prompt you didn't trigger.",
      options: [
        { text: "Deny and report to IT.", score: 5 },
        { text: "Deny and ignore.", score: 3 },
        { text: "Accept it, maybe it's a glitch.", score: 0 },
        { text: "Turn off phone.", score: 1 }
      ],
      suggestion: "MFA Fatigue is real. If you didn't ask for it, it's an attack."
    },
    {
      id: 'e18',
      category: 'Software',
      text: "You need a PDF converter tool.",
      options: [
        { text: "Request approved software from IT.", score: 5 },
        { text: "Use a free online converter.", score: 0 },
        { text: "Download a free tool.", score: 0 },
        { text: "Ask a friend.", score: 1 }
      ],
      suggestion: "Free online tools often scrape your data. Use approved software."
    },
    {
      id: 'e19',
      category: 'Clean Desk',
      text: "Leaving for the day.",
      options: [
        { text: "Lock confidential docs in a drawer.", score: 5 },
        { text: "Stack them neatly.", score: 1 },
        { text: "Put them in the bin (unshredded).", score: 0 },
        { text: "Leave them on the chair.", score: 0 }
      ],
      suggestion: "Dumpster diving is real. Shred or lock away sensitive papers."
    },
    {
      id: 'e20',
      category: 'Travel',
      text: "Charging phone at airport kiosk.",
      options: [
        { text: "Use a USB data blocker ('condom').", score: 5 },
        { text: "Plug directly into USB port.", score: 0 },
        { text: "Use my own charger in wall outlet.", score: 5 },
        { text: "Don't charge.", score: 3 }
      ],
      suggestion: "Juice Jacking can steal data via public USB ports. Block the data pins."
    }
  ],
  individual: [
    {
      id: 'i1',
      category: 'Passwords',
      text: "Do you use a Password Manager?",
      options: [
        { text: "Yes, for everything.", score: 5 },
        { text: "Browser built-in only.", score: 3 },
        { text: "No, I remember them.", score: 1 },
        { text: "I write them down.", score: 1 }
      ],
      suggestion: "The human brain cannot remember 100 unique secure passwords. Use a manager."
    },
    {
      id: 'i2',
      category: 'MFA',
      text: "Is 2FA enabled on your email and banking?",
      options: [
        { text: "Yes, using an Authenticator App.", score: 5 },
        { text: "Yes, via SMS.", score: 4 },
        { text: "Only on banking.", score: 3 },
        { text: "No.", score: 0 }
      ],
      suggestion: "SMS is better than nothing, but App-based MFA is safer against SIM swapping."
    },
    {
      id: 'i3',
      category: 'Updates',
      text: "When do you update your phone/PC?",
      options: [
        { text: "Automatic updates enabled.", score: 5 },
        { text: "When I get around to it.", score: 2 },
        { text: "Never, it breaks things.", score: 0 },
        { text: "Only when forced.", score: 3 }
      ],
      suggestion: "Software updates contain critical security patches. Automate them."
    },
    {
      id: 'i4',
      category: 'Phishing',
      text: "You win a contest you didn't enter via text.",
      options: [
        { text: "Delete and block.", score: 5 },
        { text: "Click link to see what it is.", score: 0 },
        { text: "Reply 'STOP'.", score: 2 },
        { text: "Text back asking who it is.", score: 1 }
      ],
      suggestion: "If it's too good to be true, it's a scam. Never engage."
    },
    {
      id: 'i5',
      category: 'Wi-Fi',
      text: "Home Wi-Fi password.",
      options: [
        { text: "Changed to a strong unique passphrase.", score: 5 },
        { text: "Default one on the sticker.", score: 2 },
        { text: "Password123 or similar.", score: 0 },
        { text: "No password (Open).", score: 0 }
      ],
      suggestion: "Router defaults are often guessable. Change them."
    },
    {
      id: 'i6',
      category: 'Backups',
      text: "Do you back up your photos/docs?",
      options: [
        { text: "Automated cloud backup + Local drive (3-2-1 rule).", score: 5 },
        { text: "Cloud only.", score: 4 },
        { text: "Manual copy sometimes.", score: 2 },
        { text: "No backups.", score: 0 }
      ],
      suggestion: "Ransomware or failure can wipe you out. 3 copies, 2 media, 1 offsite."
    },
    {
      id: 'i7',
      category: 'Privacy',
      text: "Social Media privacy settings.",
      options: [
        { text: "Friends only / Private.", score: 5 },
        { text: "Default settings.", score: 2 },
        { text: "Public to everyone.", score: 1 },
        { text: "I don't know.", score: 0 }
      ],
      suggestion: "Limit your blast radius. Don't let strangers profile you."
    },
    {
      id: 'i8',
      category: 'Sharing',
      text: "Posting vacation photos.",
      options: [
        { text: "After I return home.", score: 5 },
        { text: "Real-time updates.", score: 1 },
        { text: "Daily check-ins with location.", score: 0 },
        { text: "Only to close family group chat.", score: 5 }
      ],
      suggestion: "Real-time vacation posts tell burglars your house is empty."
    },
    {
      id: 'i9',
      category: 'Banking',
      text: "Checking bank balance on public Wi-Fi.",
      options: [
        { text: "Use VPN or disconnect and use 4G/5G.", score: 5 },
        { text: "Use public Wi-Fi app.", score: 1 },
        { text: "Use public Wi-Fi browser.", score: 0 },
        { text: "Ask someone to check for me.", score: 0 }
      ],
      suggestion: "Financial transactions need secure channels. Never use public Wi-Fi."
    },
    {
      id: 'i10',
      category: 'Antivirus',
      text: "Do you use security software?",
      options: [
        { text: "Yes, reputable AV/EDR suite.", score: 5 },
        { text: "OS built-in (Defender/XProtect) kept updated.", score: 4 },
        { text: "No, I'm careful.", score: 1 },
        { text: "Free toolbar antivirus.", score: 0 }
      ],
      suggestion: "Being careful isn't enough. You need automated protection."
    },
    {
      id: 'i11',
      category: 'Shopping',
      text: "Buying from a new online store.",
      options: [
        { text: "Check reviews, SSL, and use Credit Card/PayPal.", score: 5 },
        { text: "Use Debit Card directly.", score: 1 },
        { text: "Bank Transfer.", score: 0 },
        { text: "Send cash.", score: 0 }
      ],
      suggestion: "Debit cards link to your cash. Use Credit Cards for fraud protection."
    },
    {
      id: 'i12',
      category: 'Email',
      text: "Unknown attachment in email.",
      options: [
        { text: "Delete it.", score: 5 },
        { text: "Open to check.", score: 0 },
        { text: "Scan with AV then open.", score: 3 },
        { text: "Forward to friend.", score: 1 }
      ],
      suggestion: "Curiosity is an attack vector. Attachments are dangerous."
    },
    {
      id: 'i13',
      category: 'Old Tech',
      text: "Disposing of an old phone/laptop.",
      options: [
        { text: "Factory reset and overwrite wipe.", score: 5 },
        { text: "Delete files manually.", score: 1 },
        { text: "Throw in bin.", score: 0 },
        { text: "Give to relative as is.", score: 0 }
      ],
      suggestion: "Data sticks around. Securely wipe devices before disposal."
    },
    {
      id: 'i14',
      category: 'IoT',
      text: "Smart Home devices (Cameras/Alexa).",
      options: [
        { text: "On a separate Guest/IoT VLAN.", score: 5 },
        { text: "Main network with strong passwords.", score: 3 },
        { text: "Default settings.", score: 0 },
        { text: "No password.", score: 0 }
      ],
      suggestion: "IoT devices are notoriously insecure. Isolate them from your PC."
    },
    {
      id: 'i15',
      category: 'Scams',
      text: "Caller claims to be from 'The Bank' regarding fraud.",
      options: [
        { text: "Hang up, call number on back of my card.", score: 5 },
        { text: "Verify their ID then verify details.", score: 1 },
        { text: "Give them the info to stop the fraud.", score: 0 },
        { text: "Ask them to hold.", score: 2 }
      ],
      suggestion: "Banks don't call you to ask for PINs. Hang up and call back."
    },
    {
      id: 'i16',
      category: 'PINs',
      text: "Your phone PIN code.",
      options: [
        { text: "6-digit random or Biometric.", score: 5 },
        { text: "1234 or 0000.", score: 0 },
        { text: "Pattern unlock (simple Z or L).", score: 1 },
        { text: "No PIN.", score: 0 }
      ],
      suggestion: "Your phone is your life keys. Lock it properly."
    },
    {
      id: 'i17',
      category: 'Webcam',
      text: "Webcam privacy.",
      options: [
        { text: "Physical cover usage.", score: 5 },
        { text: "Software disable.", score: 3 },
        { text: "Always uncovered.", score: 1 },
        { text: "I like being watched.", score: 0 }
      ],
      suggestion: "RATs (Remote Access Trojans) are real. Cover your cam."
    },
    {
      id: 'i18',
      category: 'Accounts',
      text: "Unused accounts (old forums, shops).",
      options: [
        { text: "Delete them using a deletion service or manually.", score: 5 },
        { text: "Leave them.", score: 1 },
        { text: "Reuse passwords so I can access if needed.", score: 0 },
        { text: "I don't track them.", score: 0 }
      ],
      suggestion: "Zombie accounts get breached. Delete what you don't use."
    },
    {
      id: 'i19',
      category: 'Encryption',
      text: "Is your laptop/phone disk encrypted?",
      options: [
        { text: "Yes (BitLocker/FileVault).", score: 5 },
        { text: "No.", score: 0 },
        { text: "I don't know.", score: 1 },
        { text: "Only password protected.", score: 1 }
      ],
      suggestion: "If your device is stolen, encryption saves your data."
    },
    {
      id: 'i20',
      category: 'VPN',
      text: "Do you use a VPN for privacy?",
      options: [
        { text: "Yes, a paid reputable no-log VPN.", score: 5 },
        { text: "Free VPN app.", score: 1 },
        { text: "No.", score: 2 },
        { text: "Proxy site.", score: 0 }
      ],
      suggestion: "Free VPNs sell your data. If you want privacy, pay for it."
    }
  ],
  kids: [
    {
      id: 'k1',
      category: 'Sharing',
      text: "Someone online asks for your name and school. What do you do?",
      options: [
        { text: "Don't tell them anything and block them.", score: 5 },
        { text: "Tell them only my first name.", score: 1 },
        { text: "Tell them, they seem nice.", score: 0 },
        { text: "Ask them for their name first.", score: 1 }
      ],
      suggestion: "🔒 Keep your secrets! Never tell strangers your name, school, or address.",
      icon: "🔒"
    },
    {
      id: 'k2',
      category: 'Passwords',
      text: "Who can you share your password with?",
      options: [
        { text: "Only my parents.", score: 5 },
        { text: "My best friend.", score: 1 },
        { text: "Anyone who asks nicely.", score: 0 },
        { text: "No one, not even my parents.", score: 3 }
      ],
      suggestion: "🤐 Passwords are like underwear! Change them often and don't share them (except with parents).",
      icon: "🤐"
    },
    {
      id: 'k3',
      category: 'Strangers',
      text: "A stranger online asks to meet you in the park.",
      options: [
        { text: "Say NO and tell an adult immediately.", score: 5 },
        { text: "Go if I bring a friend.", score: 0 },
        { text: "Go see who it is.", score: 0 },
        { text: "Say maybe.", score: 1 }
      ],
      suggestion: "🚫 Stranger Danger! Never meet an online 'friend' in real life.",
      icon: "🚫"
    },
    {
      id: 'k4',
      category: 'Bullying',
      text: "Someone is saying mean things to you in a game.",
      options: [
        { text: "Block them and tell an adult.", score: 5 },
        { text: "Say mean things back.", score: 0 },
        { text: "Cry and stop playing.", score: 1 },
        { text: "Give them your items to stop.", score: 0 }
      ],
      suggestion: "🛡️ Don't feed the trolls! Block them and tell a grown-up.",
      icon: "🛡️"
    },
    {
      id: 'k5',
      category: 'Links',
      text: "You win a 'Free iPhone' but have to click a link.",
      options: [
        { text: "It's a trick. Don't click.", score: 5 },
        { text: "Click it! I want an iPhone.", score: 0 },
        { text: "Send it to a friend.", score: 0 },
        { text: "Ask the sender if it's real.", score: 1 }
      ],
      suggestion: "🎣 That's Phishing! If it sounds too good to be true, it's a trap.",
      icon: "🎣"
    },
    {
      id: 'k6',
      category: 'Downloads',
      text: "A game website says 'Download for Free Speed Boost'.",
      options: [
        { text: "Don't download without asking an adult.", score: 5 },
        { text: "Download it fast.", score: 0 },
        { text: "Click it to see what happens.", score: 0 },
        { text: "Tell everyone to download it.", score: 0 }
      ],
      suggestion: "🦠 Viruses hide in 'free' downloads. Always ask before you click.",
      icon: "🦠"
    },
    {
      id: 'k7',
      category: 'Photos',
      text: "Someone asks for a photo of you.",
      options: [
        { text: "Say NO and tell an adult.", score: 5 },
        { text: "Send one, but not my face.", score: 1 },
        { text: "Send a funny one.", score: 0 },
        { text: "Ask for their photo first.", score: 1 }
      ],
      suggestion: "📸 No photos! Once you send a picture, you can't get it back.",
      icon: "📸"
    },
    {
      id: 'k8',
      category: 'Devices',
      text: "You are done using the computer at the library.",
      options: [
        { text: "Log out of everything.", score: 5 },
        { text: "Just close the window.", score: 0 },
        { text: "Turn off the screen.", score: 1 },
        { text: "Walk away.", score: 0 }
      ],
      suggestion: "🚪 Close the door! Always log out on public computers.",
      icon: "🚪"
    },
    {
      id: 'k9',
      category: 'Video',
      text: "You are making a video for TikTok/YouTube.",
      options: [
        { text: "Make sure my school uniform isn't visible.", score: 5 },
        { text: "Show my house number.", score: 0 },
        { text: "Tell people where I hang out.", score: 0 },
        { text: "Wear my nametag.", score: 0 }
      ],
      suggestion: "📍 Hide your location! Don't let videos show where you live or go to school.",
      icon: "📍"
    },
    {
      id: 'k10',
      category: 'Feelings',
      text: "Something online makes you feel scared or weird.",
      options: [
        { text: "Close it and tell a trusted adult.", score: 5 },
        { text: "Keep watching it.", score: 0 },
        { text: "Hide it so no one knows.", score: 0 },
        { text: "Show a friend.", score: 1 }
      ],
      suggestion: "🤢 Trust your gut! If it feels yucky, click away and say something.",
      icon: "🤢"
    },
    {
      id: 'k11',
      category: 'Shopping',
      text: "A game asks for a credit card for skins.",
      options: [
        { text: "Ask my parents first.", score: 5 },
        { text: "Use mom's card from her purse.", score: 0 },
        { text: "Try to guess the numbers.", score: 0 },
        { text: "Look for a free hack.", score: 0 }
      ],
      suggestion: "💳 Money matters! Never use a credit card without permission.",
      icon: "💳"
    },
    {
      id: 'k12',
      category: 'Usernames',
      text: "Picking a new username for a game.",
      options: [
        { text: "CoolDragon99 (Not my real name).", score: 5 },
        { text: "JohnSmith2010 (My name and year).", score: 0 },
        { text: "MyAddress123.", score: 0 },
        { text: "MyPhoneNumber.", score: 0 }
      ],
      suggestion: "🎭 Be a mystery! Choose a username that doesn't say who you are.",
      icon: "🎭"
    },
    {
      id: 'k13',
      category: 'Friend Requests',
      text: "You get a friend request from someone you don't know.",
      options: [
        { text: "Ignore or block it.", score: 5 },
        { text: "Accept it to get more followers.", score: 0 },
        { text: "Message them 'Who are you?'.", score: 1 },
        { text: "Accept if they look cool.", score: 0 }
      ],
      suggestion: "✋ Stop! Collecting strangers as 'friends' is dangerous.",
      icon: "✋"
    },
    {
      id: 'k14',
      category: 'Updates',
      text: "The tablet says it needs an update.",
      options: [
        { text: "Show an adult so they can do it.", score: 5 },
        { text: "Cancel it, I'm playing.", score: 0 },
        { text: "Turn off the tablet.", score: 1 },
        { text: "Click random buttons.", score: 0 }
      ],
      suggestion: "🛠️ Updates fix holes! Ask an adult to help install them.",
      icon: "🛠️"
    },
    {
      id: 'k15',
      category: 'Pop-ups',
      text: "A pop-up says 'YOUR COMPUTER HAS A VIRUS!'.",
      options: [
        { text: "Don't click. Tell an adult.", score: 5 },
        { text: "Click 'Fix Now'.", score: 0 },
        { text: "Call the number on screen.", score: 0 },
        { text: "Cry.", score: 1 }
      ],
      suggestion: "🤡 It's a fake! Scary pop-ups are lying to tricker you.",
      icon: "🤡"
    },
    {
      id: 'k16',
      category: 'Webcam',
      text: "Should you leave your webcam on?",
      options: [
        { text: "No, cover it when not using it.", score: 5 },
        { text: "Yes, always.", score: 0 },
        { text: "Only when I'm sleeping.", score: 0 },
        { text: "It doesn't matter.", score: 1 }
      ],
      suggestion: "👁️ Privacy please! Cover your camera when you aren't chatting.",
      icon: "👁️"
    },
    {
      id: 'k17',
      category: 'Kindness',
      text: "Your friend posted a photo they look silly in.",
      options: [
        { text: "Be nice. Don't share it if they wouldn't want you to.", score: 5 },
        { text: "Share it with everyone! It's funny.", score: 0 },
        { text: "Write 'You look dumb'.", score: 0 },
        { text: "Save it for later.", score: 1 }
      ],
      suggestion: "❤️ Be a hero, not a bully. Think before you share.",
      icon: "❤️"
    },
    {
      id: 'k18',
      category: 'YouTube',
      text: "A video tells you to do a dangerous challenge.",
      options: [
        { text: "Don't do it. It's unsafe.", score: 5 },
        { text: "Try it to be famous.", score: 0 },
        { text: "Dare a friend to do it.", score: 0 },
        { text: "Film myself doing it.", score: 0 }
      ],
      suggestion: "⚠️ Safety first! Internet challenges can hurt you.",
      icon: "⚠️"
    },
    {
      id: 'k19',
      category: 'Secrets',
      text: "Someone tells you to keep a 'secret' from your parents.",
      options: [
        { text: "Tell my parents anyway.", score: 5 },
        { text: "Keep the secret.", score: 0 },
        { text: "Tell my dog.", score: 1 },
        { text: "Forget about it.", score: 1 }
      ],
      suggestion: "🗣️ No secrets! Good friends don't ask you to hide things from parents.",
      icon: "🗣️"
    },
    {
      id: 'k20',
      category: 'Logout',
      text: "It's time to stop playing.",
      options: [
        { text: "Save and log out correctly.", score: 5 },
        { text: "Just unplug the computer.", score: 0 },
        { text: "Leave it running.", score: 1 },
        { text: "Close the laptop lid.", score: 2 }
      ],
      suggestion: "👋 Bye bye! Logging out keeps your account safe for next time.",
      icon: "👋"
    }
  ]
};

export const scoring = {
  getGrade: (percentage) => {
    if (percentage >= 90) return { label: 'Elite Secure', color: '#10b981' }; // Emerald Green
    if (percentage >= 75) return { label: 'Secure', color: '#3b82f6' }; // Blue
    if (percentage >= 50) return { label: 'Moderate Risk', color: '#f59e0b' }; // Amber
    return { label: 'High Risk', color: '#ef4444' }; // Red
  }
};
