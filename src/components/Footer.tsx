'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative px-6 py-16 md:px-12 lg:px-20 bg-white">
            <div className="relative max-w-full mx-auto">
                {/* Contact Info - Stacked */}
                <div className="mb-12 space-y-4">
                    <div>
                        <p className="text-muted text-xs mb-1">Email</p>
                        <a
                            href="mailto:m.amren29@gmail.com"
                            className="text-foreground hover:text-muted transition-colors text-sm"
                        >
                            m.amren29@gmail.com
                        </a>
                    </div>

                    <div>
                        <p className="text-muted text-xs mb-1">Contact No</p>
                        <a
                            href="tel:+60103570729"
                            className="text-foreground hover:text-muted transition-colors text-sm"
                        >
                            010-357 0729
                        </a>
                    </div>

                    <div>
                        <p className="text-muted text-xs mb-1">Location</p>
                        <p className="text-foreground text-sm">
                            Kota Kinabalu, Sabah
                        </p>
                    </div>
                </div>

                {/* Bottom divider line */}
                <div className="border-t border-black/10" />

                {/* Copyright */}
                <div className="pt-4">
                    <p className="text-muted text-xs">
                        ©{currentYear} Mohamed Amrin
                    </p>
                </div>
            </div>
        </footer>
    );
}
