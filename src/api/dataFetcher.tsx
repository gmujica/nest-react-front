import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface EventInterface {
    event_id:   string;
    title:      string;
    description: string;
    created_at: Date;
    updated_at: Date;
    user:       {};
}

interface userInterface {
  name:   string;
  email:      string;
  password: string;
}

export const fetchData = async (): Promise<AxiosResponse<EventInterface[]>> => {
  try {
    const response: AxiosResponse<EventInterface[]> = await axios.get(
      "http://localhost:3000/event"
    );
    return response;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

export const fetchEventDetails = async (
  event_id: string
): Promise<AxiosResponse<EventInterface>> => {
  try {
    const response: AxiosResponse<EventInterface> = await axios.get(
      `http://localhost:3000/event/${event_id}`
    );
    return response;
  } catch (error) {
    throw new Error("Error fetching event details");
  }
};

export const createEvent = async (newDataEvent: EventInterface): Promise<EventInterface> => {
  try {
    const response: AxiosResponse<EventInterface> = await axios.post(
      "http://localhost:3000/event/",
      newDataEvent
    );
    return response.data;
  } catch (error) {
    throw new Error("Error creating data");
  }
};

export const createUser = async (newDataUser: userInterface): Promise<userInterface> => {
  try {
    const response: AxiosResponse<userInterface> = await axios.post(
      "http://localhost:3000/users/",
      newDataUser
    );
    return response.data; 
  } catch (error) {
    throw new Error("Error creating data");
  }
};

const DataFetcher: React.FC = () => {
  return null
};

export default DataFetcher;
