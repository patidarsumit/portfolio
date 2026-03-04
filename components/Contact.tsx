
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.send(
      'service_phms7bk', // replace with your EmailJS service ID
      'template_b2nyfmh', // replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'rq-1zFRah-lM8rXEF' // replace with your EmailJS public key (user ID)
    )
      .then(() => {
        setIsSubmitting(false);
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      })
      .catch(() => {
        setIsSubmitting(false);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-24">
      <div className="bg-slate-900 dark:bg-slate-900 rounded-[3rem] overflow-hidden relative">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 grid lg:grid-cols-2">
          <div className="p-12 md:p-20 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let’s work together.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              I'm always interested in new opportunities where I can contribute,
              grow, and build impactful software. Feel free to reach out if you
              think I’d be a good fit for your team.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary-400">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Email Me</div>
                  <div className="text-lg font-medium">{PERSONAL_INFO.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary-400">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Contact</div>
                  <div className="text-lg font-medium">{PERSONAL_INFO.contact}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Location</div>
                  <div className="text-lg font-medium">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 md:p-20 bg-white/5 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${isSent
                  ? 'bg-green-500 text-white'
                  : 'bg-primary-600 hover:bg-primary-700 text-white active:scale-[0.98]'
                  }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : isSent ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
