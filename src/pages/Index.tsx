import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Flame, Users, Award, CheckCircle, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary">I.C.S.T.C</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#equipment" className="hover:text-primary transition">Equipment</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
          <div className="flex gap-2">
            <Link to="/student-portal">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Student Portal</Button>
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Safety Training Excellence
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                International Cooperation Safety Training Centre (I.C.S.T.C) — Your trusted partner in health, safety, and emergency preparedness since 2024.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Explore Courses
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 bg-primary-foreground/10 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=500&fit=crop"
                alt="Safety Training"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Training Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive courses designed to keep your team safe and prepared</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Defensive Driving */}
            <Card className="hover:shadow-lg transition hover:border-primary">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Defensive Driving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Master advanced driving techniques to prevent accidents and reduce risk on the road.
                </p>
              </CardContent>
            </Card>

            {/* First Aid */}
            <Card className="hover:shadow-lg transition hover:border-primary">
              <CardHeader>
                <Heart className="w-8 h-8 text-destructive mb-2" />
                <CardTitle>First Aid & Medical</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Emergency response training including CPR, wound care, and medical emergency protocols.
                </p>
              </CardContent>
            </Card>

            {/* Fire Safety */}
            <Card className="hover:shadow-lg transition hover:border-primary">
              <CardHeader>
                <Flame className="w-8 h-8 text-orange-500 mb-2" />
                <CardTitle>Fire Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fire prevention, evacuation procedures, and extinguisher operation training.
                </p>
              </CardContent>
            </Card>

            {/* Customer Care */}
            <Card className="hover:shadow-lg transition hover:border-primary">
              <CardHeader>
                <Award className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Driver Customer Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional customer service and communication skills for drivers and staff.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment & Supplies Section */}
      <section id="equipment" className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Safety Equipment & Supplies</h2>
            <p className="text-xl text-muted-foreground">Quality products to protect your team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Medical Supplies */}
            <div className="bg-background rounded-lg p-8 border border-border hover:border-primary transition">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Medical Supplies</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> First aid kits</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Bandages & dressings</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Emergency equipment</li>
              </ul>
              <Button variant="outline" className="w-full">View Products</Button>
            </div>

            {/* Safety Equipment */}
            <div className="bg-background rounded-lg p-8 border border-border hover:border-primary transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Safety Equipment</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Protective gear</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Safety signage</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Inspection tools</li>
              </ul>
              <Button variant="outline" className="w-full">View Products</Button>
            </div>

            {/* PPE & Fire Prevention */}
            <div className="bg-background rounded-lg p-8 border border-border hover:border-primary transition">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">PPE & Fire Prevention</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Personal protective equipment</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Fire extinguishers</li>
                <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> Emergency response kits</li>
              </ul>
              <Button variant="outline" className="w-full">View Products</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose I.C.S.T.C?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Certified Instructors", desc: "Industry-certified professionals" },
              { icon: CheckCircle, title: "Proven Results", desc: "Trusted by hundreds of organizations" },
              { icon: Shield, title: "Comprehensive Coverage", desc: "All safety aspects covered" },
              { icon: Users, title: "Expert Support", desc: "Dedicated support team" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your Safety?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact us today to discuss your organization's safety training needs.
          </p>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-muted-foreground">Get in touch with our team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground mt-2">Available Mon-Fri, 9am-5pm</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">info@icstc.com</p>
                <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">113-00515 Mumias Road</p>
                <p className="text-sm text-muted-foreground mt-2">Nairobi, Kenya</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-bold text-primary">I.C.S.T.C</span>
              </div>
              <p className="text-muted-foreground text-sm">International Cooperation Safety Training Centre</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Defensive Driving</a></li>
                <li><a href="#" className="hover:text-primary">First Aid</a></li>
                <li><a href="#" className="hover:text-primary">Fire Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Medical Supplies</a></li>
                <li><a href="#" className="hover:text-primary">Safety Equipment</a></li>
                <li><a href="#" className="hover:text-primary">PPE</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 International Cooperation Safety Training Centre. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
