let events = [
  {
    id: 1,
    name: "Événement 1",
    description: "Description de l'événement 1",
    startDate: "2023-11-01T10:00:00Z",
    endDate: "2023-11-01T16:00:00Z",
  },
  {
    id: 2,
    name: "Événement 2",
    description: "Description de l'événement 2",
    startDate: "2023-11-02T10:00:00Z",
    endDate: "2023-11-02T16:00:00Z",
  },
  {
    id: 3,
    name: "Événement 3",
    description: "Description de l'événement 3",
    startDate: "2023-11-03T10:00:00Z",
    endDate: "2023-11-03T16:00:00Z",
  },
  {
    id: 4,
    name: "Événement 4",
    description: "Description de l'événement 4",
    startDate: "2023-11-04T10:00:00Z",
    endDate: "2023-11-04T16:00:00Z",
  },
  {
    id: 5,
    name: "Événement 5",
    description: "Description de l'événement 5",
    startDate: "2023-11-05T10:00:00Z",
    endDate: "2023-11-05T16:00:00Z",
  },
  {
    id: 6,
    name: "Événement 6",
    description: "Description de l'événement 6",
    startDate: "2023-11-06T10:00:00Z",
    endDate: "2023-11-06T16:00:00Z",
  },
  {
    id: 7,
    name: "Événement 7",
    description: "Description de l'événement 7",
    startDate: "2023-11-07T10:00:00Z",
    endDate: "2023-11-07T16:00:00Z",
  },
  {
    id: 8,
    name: "Événement 8",
    description: "Description de l'événement 8",
    startDate: "2023-11-08T10:00:00Z",
    endDate: "2023-11-08T16:00:00Z",
  },
  {
    id: 9,
    name: "Événement 9",
    description: "Description de l'événement 9",
    startDate: "2023-11-09T10:00:00Z",
    endDate: "2023-11-09T16:00:00Z",
  },
  {
    id: 10,
    name: "Événement 10",
    description: "Description de l'événement 10",
    startDate: "2023-11-10T10:00:00Z",
    endDate: "2023-11-10T16:00:00Z",
  },
];

export const createEvent = (req, res) => {
  const { name, description, startDate, endDate } = req.body;
  const newEvent = {
    id: events.length + 1,
    name,
    description,
    startDate,
    endDate,
  };
  events.push(newEvent);
  res.status(201).send(newEvent);
};

export const listEvents = (req, res) => {
  res.send(events);
};
