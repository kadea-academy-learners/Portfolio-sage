function Send-GmailMessage {
    param(
        [Parameter(Mandatory=$true)]
        [string]$To,
        
        [Parameter(Mandatory=$true)]
        [string]$Subject,
        
        [Parameter(Mandatory=$true)]
        [string]$Body,
        
        [string]$From = "sagedimumbe7@gmail.com"
    )
    
    # Demander le mot de passe d'application de manière sécurisée
    Write-Host "Veuillez entrer votre mot de passe d'application Gmail (16 caractères):" -ForegroundColor Yellow
    $SecurePassword = Read-Host "Mot de passe d'application" -AsSecureString
    
    # Créer les identifiants
    $Credential = New-Object System.Management.Automation.PSCredential($From, $SecurePassword)
    
    try {
        # Envoyer l'email
        Send-MailMessage -From $From -To $To -Subject $Subject -Body $Body -SmtpServer "smtp.gmail.com" -Port 587 -UseSsl -Credential $Credential
        Write-Host "Email envoyé avec succès à $To" -ForegroundColor Green
    }
    catch {
        Write-Host "Erreur lors de l'envoi: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Fonction rapide pour pager l'admin
function Page-Admin {
    param(
        [Parameter(Mandatory=$true)]
        [string]$AdminEmail,
        
        [string]$Message = "Message urgent de la part de sagedimumbe7@gmail.com"
    )
    
    Send-GmailMessage -To $AdminEmail -Subject "PAGE: Message Urgent" -Body $Message
}

Write-Host "Fonctions créées:" -ForegroundColor Cyan
Write-Host "- Send-GmailMessage : Envoie un email via Gmail"
Write-Host "- Page-Admin : Page rapidement un administrateur"
Write-Host ""
Write-Host "Exemples d'utilisation:" -ForegroundColor Cyan
Write-Host 'Send-GmailMessage -To "admin@example.com" -Subject "Test" -Body "Message de test"'
Write-Host 'Page-Admin -AdminEmail "admin@example.com" -Message "Besoin d''assistance urgente"'
