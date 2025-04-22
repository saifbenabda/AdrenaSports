import Link from "next/link"
import { Instagram, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-16 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">About AdrenaSports</h3>
            <p className="mb-8 max-w-md text-gray-400 leading-relaxed">
              AdrenaSports is dedicated to promoting sports culture and organizing competitive tournaments for students
              at ISETCOM. We believe in the power of sports to build community, develop leadership skills, and create
              lasting memories.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/adrenasp0rts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-7 w-7" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-yellow-400" />
                <a href="mailto:adrenasports14@gmail.com" className="hover:text-yellow-400 transition-colors">
                  adrenasports14@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-yellow-400 mt-1" />
                <address className="not-italic">ISETCOM, Tunis, Tunisia</address>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} AdrenaSports. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
