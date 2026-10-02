import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock3,
  ListTodo,
  Plus,
  TrendingUp,
  TriangleAlert,
} from 'lucide-react'

const stats = [
  {
    title: 'Total Tasks',
    value: '12',
    description: 'All your tasks',
    icon: ListTodo,
    iconStyle: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Completed',
    value: '7',
    description: '58% completed',
    icon: CheckCircle2,
    iconStyle: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Pending',
    value: '4',
    description: 'Tasks remaining',
    icon: Clock3,
    iconStyle: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Overdue',
    value: '1',
    description: 'Needs attention',
    icon: TriangleAlert,
    iconStyle: 'bg-red-50 text-red-500',
  },
]

const tasks = [
  {
    id: 1,
    title: 'Complete dashboard UI design',
    category: 'Development',
    time: '10:00 AM',
    priority: 'High',
    completed: false,
  },
  {
    id: 2,
    title: 'Team project meeting',
    category: 'Work',
    time: '1:30 PM',
    priority: 'Medium',
    completed: true,
  },
  {
    id: 3,
    title: 'Update GitHub repository',
    category: 'Development',
    time: '4:00 PM',
    priority: 'Medium',
    completed: false,
  },
  {
    id: 4,
    title: 'Plan tomorrow tasks',
    category: 'Personal',
    time: '8:00 PM',
    priority: 'Low',
    completed: false,
  },
]

const priorityStyles = {
  High: 'bg-red-50 text-red-600',
  Medium: 'bg-amber-50 text-amber-600',
  Low: 'bg-emerald-50 text-emerald-600',
}

function DashboardPage() {
  return (
    <div className="p-5 md:p-8">
      <section className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold text-indigo-600">
            Thursday, October 2
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Good evening, Vishwa 👋
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Here&apos;s what&apos;s happening with your tasks today.
          </p>
        </div>

        <button
          type="button"
          className="flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
        >
          <Plus size={18} />
          Add New Task
        </button>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconStyle}`}
                >
                  <Icon size={21} />
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                {stat.description}
              </p>
            </div>
          )
        })}
      </section>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 md:px-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Today&apos;s Tasks
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Keep moving forward with today&apos;s plan.
              </p>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View all
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex flex-col gap-4 px-5 py-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between md:px-6"
              >
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    className="mt-0.5 text-slate-400"
                  >
                    {task.completed ? (
                      <CheckCircle2
                        size={21}
                        className="text-emerald-500"
                      />
                    ) : (
                      <Circle size={21} />
                    )}
                  </button>

                  <div>
                    <h3
                      className={`text-sm font-semibold ${
                        task.completed
                          ? 'text-slate-400 line-through'
                          : 'text-slate-800'
                      }`}
                    >
                      {task.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span>{task.category}</span>

                      <span className="flex items-center gap-1">
                        <Clock3 size={13} />
                        {task.time}
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${priorityStyles[task.priority]}`}
                >
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-slate-900">
                  Daily Progress
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Your productivity today
                </p>
              </div>

              <TrendingUp
                size={21}
                className="text-emerald-500"
              />
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-4xl font-bold text-slate-900">
                  58%
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  7 of 12 tasks
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                +12% today
              </span>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[58%] rounded-full bg-indigo-600" />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Great progress. Complete a few more tasks to finish the day
              strong.
            </p>
          </section>

          <section className="rounded-2xl bg-linear-to-br from-indigo-600 to-purple-600 p-6 text-white shadow-lg shadow-indigo-100">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
              <CalendarDays size={21} />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Stay ahead of your schedule
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/75">
              Review upcoming tasks and organize your priorities before
              tomorrow.
            </p>

            <button
              type="button"
              className="mt-5 flex items-center gap-2 text-sm font-semibold"
            >
              Open Calendar
              <ArrowRight size={16} />
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage