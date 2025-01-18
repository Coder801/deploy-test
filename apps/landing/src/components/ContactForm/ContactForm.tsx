import clsx from "clsx";
import { FC } from "react";

import { Typography, Button } from "@/ui";
import { Input } from "@/ui/Input";
import { Formik, Form } from "formik";

import styles from "./styles.module.scss";

type ContactFormProps = {
  className?: string;
};

export const ContactForm: FC<ContactFormProps> = ({ className }) => (
  <div className={clsx(className, styles.container)}>
    <Typography variant="h2" className={styles.title}>
      Couldn&apos;t find the <br /> answer to your question?
    </Typography>
    <Typography className={styles.caption} variant="h5">
      Write to our direct contact email and we will give you an answer as soon
      as possible.
    </Typography>

    <Formik
      initialValues={{ requester: "", subject: "", description: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Typography color="secondary" type={2} className={styles.label}>
            Requester <span className={styles.asterisk}>*</span>
          </Typography>
          <Input
            name="requester"
            className={styles.input}
            placeholder="Email"
          />
          <Typography color="secondary" type={2} className={styles.label}>
            Subject <span className={styles.asterisk}>*</span>
          </Typography>
          <Input name="subject" className={styles.input} placeholder="Title" />
          <Typography color="secondary" type={2} className={styles.label}>
            Description <span className={styles.asterisk}>*</span>
          </Typography>
          <Input
            type="textarea"
            name="description"
            className={styles.input}
            placeholder="Type your question ..."
          />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);
