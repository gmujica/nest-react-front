import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

// Define the data object interface
interface EventInterface {
    event_id:   string;
    title:      string;
    descrption: string;
    created_at: Date;
    updated_at: Date;
    user:       {};
}

export const fetchData = async (): Promise<AxiosResponse<EventInterface[]>> => {
  try {
    const response: AxiosResponse<EventInterface[]> = await axios.get(
      "http://localhost:3000/event" // Replace with your GET API endpoint
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
      `http://localhost:3000/event/${event_id}` // Use the same API URL as fetchData
    );
    return response;
  } catch (error) {
    throw new Error("Error fetching event details");
  }
};

/*export const createData = async (newData: EventInterface): Promise<AxiosResponse<EventInterface>> => {
  try {
    const response: AxiosResponse<EventInterface> = await axios.post(
      "https://api.example.com/users", // Replace with your POST API endpoint
      newData
    );
    return response;
  } catch (error) {
    throw new Error("Error creating data");
  }
};

export const updateData = async (updatedData: EventInterface): Promise<AxiosResponse<EventInterface>> => {
  try {
    const response: AxiosResponse<EventInterface> = await axios.put(
      `https://api.example.com/users/${updatedData.id}`, // Replace with your PUT API endpoint
      updatedData
    );
    return response;
  } catch (error) {
    throw new Error("Error updating data");
  }
};

export const deleteData = async (id: string): Promise<void> => {
  try {
    await axios.delete(
      `https://api.example.com/users/${id}` // Replace with your DELETE API endpoint
    );
  } catch (error) {
    throw new Error("Error deleting data");
  }
};*/

const DataFetcher: React.FC = () => {
  return null
};

export default DataFetcher;
