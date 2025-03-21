import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  week: { type: Number, required: true },
  slotNumber: { type: Number, required: true, min: 1, max: 10 },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  className: { type: String, required: true },
  course: { type: String, required: true },
  room: { type: String, required: true },
  teacherId: { type: String, required: true },
 
  students: [
    {
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
      rollNo: { type: String, required: true },
      name: { type: String, required: true },
      status: { type: String, enum: ["P", "A", "L"], default: "P" },
    },
  ],
});

const AttendanceModel =
  mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema);

export default AttendanceModel;