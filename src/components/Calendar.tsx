import { daysOfWeek } from "../consts/dates";
import { CalendarDiv } from "./styled/CalendarDiv";
import { CalendarGrid } from "./styled/CalendarGrid";
import { CalendarHeader } from "./styled/CalendarHeader";
import { CalendarMonth } from "./styled/CalendarMonth";
import { H3, SectionTitle } from "./styled/H3";
import { LeftButton } from "./styled/LeftButton";
import { RightButton } from "./styled/RightButton";
import { Cell, DateCell, PrefixCell, SuffixCell } from "./styled/Cell";
import { add, differenceInDays, endOfMonth, format, isToday, setDate, startOfMonth, sub } from "date-fns";
import { CalendarSelected } from "./styled/CalendarSelected";
import { CalendarGridSuffix } from "./styled/CalendarGridSuffix";
import { CalendarWeekdays } from "./styled/CalendarWeekdays";
import { getBookings } from "../services/restaurantService";
import { IBooking } from "../models/IBooking";
import { useState } from "react";
import { IBookedTables } from "../models/IBookedTables";
import { ChangeH4, H4 } from "./styled/H4";
import { CalendarWrapper } from "./styled/CalendarWrapper";

interface ICalendarProps {
    value: Date;
    onChange: (value: Date) => void;
    //selected: boolean;
    // setSelectedDate(): void;
    bookedTables: IBookedTables;
    isToggled: boolean;
    onClick: (index: number) => void; 
    date: string;
    visibleState: boolean;
    displaySection: () => void;
}

export const Calendar = (props: ICalendarProps) => {
    const startDate = startOfMonth(props.value);    //Start day of month
    const endDate = endOfMonth(props.value);    //EndDate of month
    const numberofDays = differenceInDays(endDate, startDate) +1;   //Total days of the month

    // const dateIsh = setDate(props);

    // console.log(props.onChange(props.value));

    //Cell fillers for start and end of month
    const prefixDays = startDate.getDay();  
    const suffixDays = 6 - endDate.getDay();

    //Substract 1 month to go to previous month
    const changeToPrevMonth = () => {
        props.onChange(sub(props.value, {months: 1}));
    }
    //Add 1 month to go the next month
    const changeToNextMonth = () => {
        props.onChange(add(props.value, {months: 1}));
    }

    const showTimeSlots = () => {

    }

    //Map through const list of days and create weekday Cells
    let daysOfWeekHtml = daysOfWeek.map( (day) => {

        return(
            <Cell className="litetes" key={day}>{day}</Cell>
    )}); 

    
            
    let arrayOfDays = Array.from( {length: numberofDays});

    const checkForDate = () => {

    }

    let daysOfMonthHTML = arrayOfDays.map( (day, index) => {
        const dateCounts = index + 1;
        const isCurrentDate = dateCounts === props.value.getDate();

        return (
            <DateCell selected={false} onClick={() => props.onClick(dateCounts)} key={dateCounts}>{dateCounts}</DateCell>
        )});

    let arrayOfPrefixDays = Array.from( {length: prefixDays -1});
    let prefixDaysOfMonth = arrayOfPrefixDays.map( (day, index) => {

        return (
            <PrefixCell key={index}></PrefixCell>
        )});

    let arrayOfSuffixDays = Array.from( {length: suffixDays +1});
    let suffixDaysOfMonth = arrayOfSuffixDays.map( (day, index) => {

        return (
            <SuffixCell key={index}></SuffixCell>
        )});

    return (
        <CalendarDiv>
            <SectionTitle selected={props.visibleState}>Calendar</SectionTitle>
            <CalendarWrapper selected={props.visibleState}>
                <CalendarHeader>
                    <LeftButton onClick={changeToPrevMonth}>left</LeftButton>
                    <CalendarMonth>{format(props.value, "LLLL yyyy")}</CalendarMonth>
                    <RightButton onClick={changeToNextMonth}>right</RightButton>
                </CalendarHeader>
                <CalendarGrid>
                    {/* {daysOfWeek.map( (day) => (
                        <Cell key={day}>{day}</Cell>
                    ) )} */}
                    {daysOfWeekHtml}
                    {prefixDaysOfMonth}
                    {daysOfMonthHTML}
                    {suffixDaysOfMonth}
                    {/* {Array.from({length: numberofDays}).map( () => ())} */}
                </CalendarGrid>
            </CalendarWrapper>
            <CalendarSelected>
                <H4>Valt datum: {props.date}</H4>
                <ChangeH4 onClick={props.displaySection}>Ändra</ChangeH4>
            </CalendarSelected>
        </CalendarDiv>
    );
}