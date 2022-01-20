import { createContext, useContext, useState } from 'react'

const calendarContext = createContext()

export function CalendarProvider({ children }) {
  const [selectedDay, setSelectedDay] = useState()

  return (
    <calendarContext.Provider value={{
      selectedDay,
      setSelectedDay
    }}>
      { children }
    </calendarContext.Provider>
  )
}

export function useCalendarContext() {
  return useContext(calendarContext)
}
