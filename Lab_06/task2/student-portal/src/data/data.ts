export interface Course {
  id: number
  title: string
  instructor: string
  description: string
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React Fundamentals",
    instructor: "John Smith",
    description: "Learn the basics of React including components and hooks."
  },
  {
    id: 2,
    title: "TypeScript Basics",
    instructor: "Anna Brown",
    description: "Introduction to TypeScript and static typing."
  },
  {
    id: 3,
    title: "Web Development",
    instructor: "Michael Lee",
    description: "Full overview of modern web development."
  },
  {
    id: 4,
    title: "Database Systems",
    instructor: "Sarah Wilson",
    description: "Learn relational databases and SQL."
  }
]

export function getCourseById(id: number) {
  return courses.find(course => course.id === id)
}