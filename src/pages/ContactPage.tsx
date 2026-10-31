import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

export default function ContactPage() {
  const { lang } = useLang();
  return (
    <div className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">
            {lang === 'ta' ? 'தொடர்பு கொள்ள' : 'Get in Touch'}
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-6">
            {lang === 'ta' ? 'அருங்காட்சியகத் தகவல்' : 'Museum Information'}
          </h1>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-surface p-8 rounded-2xl border border-border shadow-apple space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-accent mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-primary mb-1">{lang === 'ta' ? 'முகவரி' : 'Address'}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Keeladi Archaeological Site,<br />Tirupuvanam Taluk, Sivaganga District,<br />Tamil Nadu - 630104, India.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-accent mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-primary mb-1">{lang === 'ta' ? 'பார்வை நேரம்' : 'Visiting Hours'}</h3>
                <p className="text-secondary text-sm">
                  10:00 AM – 5:00 PM<br />
                  {lang === 'ta' ? 'செவ்வாய்க்கிழமை விடுமுறை' : 'Closed on Tuesdays'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-accent mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-primary mb-1">{lang === 'ta' ? 'தொலைபேசி' : 'Phone'}</h3>
                <p className="text-secondary text-sm">+91 4575 277 070</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-accent mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-primary mb-1">Email</h3>
                <p className="text-secondary text-sm">directorarchaeology@tn.gov.in</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-elevated rounded-2xl border border-border shadow-apple overflow-hidden h-80 md:h-auto">
            <iframe 
              src="https://www.google.com/maps?q=9.863073,78.182093&hl=en&z=16&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '320px' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Keeladi Interactive Map"
            />          
          </div>
        </div>
      </div>
    </div>
  );
}
