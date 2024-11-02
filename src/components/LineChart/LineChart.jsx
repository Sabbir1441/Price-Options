import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

const subjectData = [
    {"studentId": 1, "name": "Alice", "mathScore": 5, "physicsScore": 90, "chemistryScore": 88},
    {"studentId": 2, "name": "Bob", "mathScore": 75, "physicsScore": 80, "chemistryScore": 8},
    {"studentId": 3, "name": "Charlie", "mathScore": 92, "physicsScore": 94, "chemistryScore": 91},
    {"studentId": 4, "name": "David", "mathScore": 6, "physicsScore": 70, "chemistryScore": 68},
    {"studentId": 5, "name": "Eva", "mathScore": 80, "physicsScore": 85, "chemistryScore": 8},
    {"studentId": 6, "name": "Frank", "mathScore": 78, "physicsScore": 76, "chemistryScore": 80},
    {"studentId": 7, "name": "Grace", "mathScore": 88, "physicsScore": 89, "chemistryScore": 90},
    {"studentId": 8, "name": "Henry", "mathScore": 95, "physicsScore": 92, "chemistryScore": 93},
    {"studentId": 9, "name": "Isabel", "mathScore": 82, "physicsScore": 81, "chemistryScore": 83},
    {"studentId": 10, "name": "Jack", "mathScore": 70, "physicsScore": 73, "chemistryScore": 72}
]



    return (
        <div>
            <LChart height={500} width={800} data={subjectData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"mathScore"} stroke='red'></Line>
                <Line dataKey={"chemistryScore"} stroke='green'></Line>
                <Line dataKey={"physicsScore"}></Line>
            </LChart>
        </div>
    );
};

export default LineChart;