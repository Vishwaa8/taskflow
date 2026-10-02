import { useState } from 'react'
import {
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock3,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
} from 'lucide-react'

import TaskForm from '../components/TaskForm'

const initialTasks = [
  {
    id: 1,
    title: 'Complete dashboard UI design',
    description: 'Finish the main TaskFlow dashboard layout and polish the UI.',
    category: 'Development',
    dueDate: 'Oct 2',
    dueTime: '10:00 AM',
    priority: 'High',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Team project meeting',
    description: 'Discuss current progress and next sprint priorities.',
    category: 'Work',
    dueDate: 'Oct 2',
    dueTime: '1:30 PM',
    priority: 'Medium',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Update GitHub repository',
    description: 'Push latest frontend changes and update commit history.',
    category: 'Development',
    dueDate: 'Oct 2',
    dueTime: '4:00 PM',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: 4,
    title: 'Plan tomorrow tasks',
    description: 'Prepare the next day task list and priorities.',
    category: 'Personal',
    dueDate: 'Oct 2',
    dueTime: '8:00 PM',
    priority: 'Low',
    status: 'Pending',
  },
  {
    id: 5,
    title: 'Review project documentation',
    description: 'Check README and project documentation for missing details.',
    category: 'Development',
    dueDate: 'Oct 3',
    dueTime: '9:00 AM',
    priority: 'High',
    status: 'Pending',
  },
]

const priorityStyles = {
  High: 'bg-red-50 text-red-600',
  Medium: 'bg-amber-50 text-amber-600',
  Low: 'bg-emerald-50 text-emerald-600',
}

const statusStyles = {
  Pending: 'bg-slate-100 text-slate-600',
  Completed: 'bg-emerald-50 text-emerald-600',
}

function formatDate(dateValue) {
  if (!dateValue) {
    return 'No date'
  }

  const date = new Date(`${dateValue}T00:00:00`)

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

function formatTime(timeValue) {
  if (!timeValue) {
    return 'No time'
  }

  const [hours, minutes] = timeValue.split(':')
  const date = new Date()

  date.setHours(Number(hours))
  date.setMinutes(Number(minutes))

  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

function TasksPage() {
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [tasks, setTasks] = useState(initialTasks)

  const pendingCount = tasks.filter(
    (task) => task.status === 'Pending',
  ).length

  const handleCreateTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      description: taskData.description || 'No description added.',
      category: taskData.category,
      dueDate: formatDate(taskData.dueDate),
      dueTime: formatTime(taskData.dueTime),
      priority: taskData.priority,
      status: taskData.status,
    }

    setTasks((currentTasks) => [
      newTask,
      ...currentTasks,
    ])
  }

  return (
    <>
      <div className="p-5 md:p-8">
        <section className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold text-indigo-600">
              Task Management
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              My Tasks
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Organize, track and manage all your tasks from one place.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowTaskForm(true)}
            className="flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            <Plus size={18} />
            Add New Task
          </button>
        </section>

        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="relative w-full xl:max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                <Filter size={17} />
                Status
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                <SlidersHorizontal size={17} />
                Priority
              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                <CalendarDays size={17} />
                Due Date
              </button>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 md:px-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                All Tasks
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                {tasks.length} tasks in your workspace
              </p>
            </div>

            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              {pendingCount} Pending
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex flex-col gap-5 px-5 py-5 transition hover:bg-slate-50 md:px-6 xl:flex-row xl:items-center xl:justify-between"
              >
                <div className="flex min-w-0 flex-1 items-start gap-4">
                  <button
                    type="button"
                    className="mt-1 shrink-0 text-slate-400 transition hover:text-indigo-600"
                  >
                    {task.status === 'Completed' ? (
                      <CheckCircle2
                        size={22}
                        className="text-emerald-500"
                      />
                    ) : (
                      <Circle size={22} />
                    )}
                  </button>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className={`font-semibold ${
                          task.status === 'Completed'
                            ? 'text-slate-400 line-through'
                            : 'text-slate-900'
                        }`}
                      >
                        {task.title}
                      </h3>

                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          priorityStyles[task.priority]
                        }`}
                      >
                        {task.priority}
                      </span>
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                      {task.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="font-medium text-slate-500">
                        {task.category}
                      </span>

                      <span className="flex items-center gap-1">
                        <CalendarDays size={14} />
                        {task.dueDate}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock3 size={14} />
                        {task.dueTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 pl-10 xl:pl-0">
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      statusStyles[task.status]
                    }`}
                  >
                    {task.status}
                  </span>

                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    aria-label={`More options for ${task.title}`}
                  >
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {showTaskForm && (
        <TaskForm
          onClose={() => setShowTaskForm(false)}
          onCreateTask={handleCreateTask}
        />
      )}
    </>
  )
}

export default TasksPage