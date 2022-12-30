// import React from 'react';

// function Student (props) {
//   // Renders out a draggable student
// }

// // do not re-render if the students list reference has not changed
// const InnerList = React.memo(function InnerList(props: Person[]) {
//   return props.students.map((student: Person) => (
//     <Student student={student} />
//   ));
// });

// function Students(props: { students: Person[] }) {
//   return (
//     <Droppable droppableId="list">
//       {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
//         <div
//           ref={provided.innerRef}
//           style={{
//             backgroundColor: snapshot.isDragging ? 'green' : 'lightblue',
//           }}
//           {...provided.droppableProps}
//         >
//           {/* only re-render if the students array reference changes */}
//           <InnerList students={props.students} />
//           {provided.placeholder}
//         </div>
//       )}
//     </Droppable>
//   );
// }