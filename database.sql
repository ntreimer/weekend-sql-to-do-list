CREATE TABLE "checklist" (
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR (400),
    "complete" BOOLEAN
);

INSERT INTO "checklist" (task, complete) VALUES ('Walk the dog', false);
SELECT * from "checklist";