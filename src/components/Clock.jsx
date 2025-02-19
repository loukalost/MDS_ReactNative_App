import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

function Clock (props) {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <View>
      <Text style={{ fontSize: props.fontSize || 30, letterSpacing: 5 }}>
        {date.toLocaleTimeString()}
      </Text>
    </View>
  )
}

export default Clock
