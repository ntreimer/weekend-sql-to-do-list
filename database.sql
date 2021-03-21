CREATE TABLE "checklist" (
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR (400),
    "complete" BOOLEAN
);

INSERT INTO "checklist" (task, complete) 
VALUES
('Take trash out', true),
('Rake the leaves', false),
('Delete e-mails', true),
('Walk the dog', false),
('Do PRIME homework', true);

SELECT * from "checklist"
ORDER BY id;