import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, LogOut, Menu, X, Clock, CheckCircle, AlertCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function StudentPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSidebarOpen(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-10 h-10 text-primary" />
              <span className="text-3xl font-bold text-primary">I.C.S.T.C</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Student Portal</h1>
            <p className="text-muted-foreground">Sign in to access your courses and progress</p>
          </div>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your credentials to access the portal</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-border"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Sign In
                </Button>
              </form>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground text-center mb-3">Demo credentials:</p>
                <p className="text-xs text-muted-foreground text-center">Email: student@icstc.com</p>
                <p className="text-xs text-muted-foreground text-center">Password: demo123</p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <Link to="/">
              <Button variant="outline" className="border-primary text-primary">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-40 bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          <span className="font-bold">I.C.S.T.C Portal</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-64 bg-primary text-primary-foreground p-6 fixed md:relative h-full md:h-auto overflow-y-auto z-30`}
        >
          <div className="hidden md:flex items-center gap-2 mb-8">
            <BookOpen className="w-8 h-8" />
            <span className="font-bold text-xl">I.C.S.T.C</span>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setSidebarOpen(false)}
              className="w-full text-left px-4 py-3 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition font-medium"
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => setSidebarOpen(false)}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition"
            >
              📚 My Courses
            </button>
            <button
              onClick={() => setSidebarOpen(false)}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition"
            >
              📋 Assignments
            </button>
            <button
              onClick={() => setSidebarOpen(false)}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition"
            >
              🏆 Certificates
            </button>
            <button
              onClick={() => setSidebarOpen(false)}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition"
            >
              ⚙️ Settings
            </button>
          </nav>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <Link to="/">
              <Button
                variant="outline"
                className="w-full mb-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Home className="w-4 h-4 mr-2" /> Back to Home
              </Button>
            </Link>
            <Button
              onClick={handleLogout}
              className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 md:p-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Welcome back, Student! 👋</h1>
              <p className="text-muted-foreground">Here's what's happening in your learning journey</p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <p className="text-sm text-muted-foreground mt-2">Active Courses</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-accent">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-accent">12</div>
                  <p className="text-sm text-muted-foreground mt-2">Completed Lessons</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-secondary">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-secondary">5</div>
                  <p className="text-sm text-muted-foreground mt-2">Pending Assignments</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary">2</div>
                  <p className="text-sm text-muted-foreground mt-2">Certificates Earned</p>
                </CardContent>
              </Card>
            </div>

            {/* Current Courses */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Current Courses</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Defensive Driving",
                    progress: 75,
                    lessons: "12/16",
                    status: "In Progress",
                  },
                  {
                    title: "First Aid & Medical Emergency",
                    progress: 50,
                    lessons: "8/16",
                    status: "In Progress",
                  },
                  {
                    title: "Fire Safety",
                    progress: 100,
                    lessons: "10/10",
                    status: "Completed",
                  },
                ].map((course, i) => (
                  <Card key={i} className="hover:shadow-lg transition overflow-hidden">
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.lessons} lessons completed</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">Progress</span>
                          <span className="text-primary font-bold">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm mb-4">
                        {course.status === "Completed" ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-green-600 font-medium">Completed</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="text-primary font-medium">In Progress</span>
                          </>
                        )}
                      </div>
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Continue Learning
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pending Assignments */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Pending Assignments</h2>
              <div className="space-y-3">
                {[
                  {
                    title: "Defensive Driving Quiz",
                    course: "Defensive Driving",
                    dueDate: "Due in 2 days",
                    priority: "high",
                  },
                  {
                    title: "First Aid Practical Assessment",
                    course: "First Aid & Medical Emergency",
                    dueDate: "Due in 5 days",
                    priority: "medium",
                  },
                  {
                    title: "Safety Protocols Essay",
                    course: "Fire Safety",
                    dueDate: "Due in 7 days",
                    priority: "low",
                  },
                ].map((assignment, i) => (
                  <Card key={i} className="hover:shadow-md transition">
                    <CardContent className="pt-6 flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{assignment.title}</h3>
                        <p className="text-sm text-muted-foreground">{assignment.course}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium flex items-center gap-1 mb-2">
                          <AlertCircle className="w-4 h-4" /> {assignment.dueDate}
                        </p>
                        <Button size="sm" variant="outline" className="border-primary text-primary">
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
