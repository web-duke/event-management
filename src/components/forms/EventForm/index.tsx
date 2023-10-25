import { FormikErrors, useFormik } from "formik";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addEvent } from "../../../api/eventsAPI";
import { EventInterface } from "../../../interfaces/eventInterface";
import { closeModal } from "../../../redux/modalSlice";
import "./style.scss";

const EventForm: React.FC = () => {
  const dispatch = useDispatch();
  const formik = useFormik<EventInterface>({
    initialValues: {
      id: "",
      name: "",
      description: "",
      startDate: null,
      endDate: null,
    },

    validate: (values) => {
      const errors: FormikErrors<EventInterface> = {};

      if (!values.name) {
        errors.name = "Requis";
      } else if (values.name.length > 32) {
        errors.name = "Maximum 32 caractères";
      }

      if (!values.description) {
        errors.description = "Requis";
      }

      if (!values.startDate || !values.endDate) {
        errors.startDate = "Les deux dates sont requises";
        errors.endDate = "Les deux dates sont requises";
      }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        await addEvent(values);
        dispatch(closeModal());
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form className="EventForm" onSubmit={formik.handleSubmit}>
      <label>Nom de l'événement</label>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        className={formik.touched.name && formik.errors.name ? "error" : ""}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="error-message">{formik.errors.name}</div>
      ) : null}

      <label>Description de l'événement</label>
      <input
        type="text"
        name="description"
        onChange={formik.handleChange}
        value={formik.values.description}
        className={
          formik.touched.description && formik.errors.description ? "error" : ""
        }
      />
      {formik.touched.description && formik.errors.description ? (
        <div className="error-message">{formik.errors.description}</div>
      ) : null}

      <label>Date de début</label>
      <DatePicker
        selected={formik.values.startDate}
        onChange={(date: Date) => formik.setFieldValue("startDate", date)}
        className={
          formik.touched.startDate && formik.errors.startDate ? "error" : ""
        }
      />

      <label>Date de fin</label>
      <DatePicker
        selected={formik.values.endDate}
        onChange={(date: Date) => formik.setFieldValue("endDate", date)}
        className={
          formik.touched.endDate && formik.errors.endDate ? "error" : ""
        }
      />
      {formik.touched.endDate && formik.errors.endDate ? (
        <div className="error-message">{formik.errors.endDate}</div>
      ) : null}

      <button type="submit">Ajouter</button>
    </form>
  );
};

export default EventForm;
