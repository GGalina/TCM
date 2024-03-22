import Moment from 'moment';
import { useData } from '../DataContext';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-native-calendar-datepicker';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export const DateTimeScreen = () => {
  const navigation = useNavigation();
  const { state, dispatch } = useData();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();

  const timeSlots = ['10:30', '11:30', '13:00', '16:00', '18:00', '19:30', '20:30'];

  useEffect(() => {
    if (
      state.location !== null &&
      state.therapist !== null &&
      state.service !== null &&
      state.date !== null &&
      state.time !== null
    ) {
      navigation.navigate('SuccessfulBooking');
    }
  }, [state]);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (slot) => {
    setSelectedTime(slot);
  };

  const handleButtonPress = () => {
    dispatch({ type: 'SELECT_DATE', payload: selectedDate }); 
    dispatch({ type: 'SELECT_TIME', payload: selectedTime });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Please select date of your appointment</Text>
      <Calendar
        onChange={handleDateSelection}
        selected={selectedDate}
        minDate={Moment().startOf('day')}
        maxDate={Moment().add(6, 'month').startOf('day')}
        headerDateFormat="MMMM YYYY"
        barView={styles.barView}
        barText={styles.barText}
        dayHeaderView={styles.dayHeader}
        dayHeaderText={styles.dayHeaderText}
        dayTodayText={{color: '#A00C4A'}}
        dayRowView={styles.dayRowView}
        dayText={styles.dayText}
        daySelectedText={styles.daySelectedText}
        style={styles.calendar}
      />

      {selectedDate && (
        <View style={styles.timeWrapper}>
          <Text style={styles.text}>Please select time of your appointment</Text>
          <View style={styles.timeContainer}>
          {timeSlots.map((slot, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.slotButton, selectedTime === slot && styles.selectedTimeSlot]}
              onPress={() => handleTimeSelection(slot)}
            >
              <Text style={[styles.time, selectedTime === slot && styles.selectedTimeText]}>{slot}</Text>
            </TouchableOpacity>
          ))}
          </View>
          
          {selectedDate && selectedTime && (
            <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleButtonPress}
            >
              <Text style={styles.buttonText}>Confirm Booking </Text>
              </TouchableOpacity>
              </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    fontSize: 14,
    color: '#000000',
    marginBottom: 20,
  },
  calendar: {
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    backgroundColor: '#ffffff',
    color: 'red',
    borderWidth: 1,
    borderColor: '#103d19',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  barView: {
    backgroundColor: '#103d19',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30
  },
  barText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  dayHeader: {
    borderColor: '#103d19', //green from logo
  },
  dayHeaderText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#A00C4A', //red from logo
  },
  dayRowView: {
    borderColor: '#E5E4E2', //grey
    height: 40,
  },
  dayText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
  },
  daySelectedText: {
    backgroundColor: '#103d19',
    color: '#FFFFFF',
    borderColor: '#103d19'
  },
  timeWrapper: {
    flex: 1,
    width: Dimensions.get("window").width,
    paddingTop: 20,
    paddingBottom: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: 30,
  },
  time: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#808080'
  },
  slotButton: {
    width: '20%',
    flexDirection: 'row',
    borderColor: '#103d19',
    borderWidth: 1,
    backgroundColor: '#E5E4E2',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  selectedTimeSlot: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    backgroundColor: '#103d19',
    color: '#000000'
  },
  selectedTimeText: {
    color: '#FFFFFF'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#103d19',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderColor: '#103d19',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#FFFFFF'
  },
});
