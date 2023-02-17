import { seq, Map } from 'immutable';

export default function printBestStudents( inputObject ) {
    const newMap = Map(inputObject);
    const lazyseq = seq(newMap);
    const gradesObject = lazySeq.filter((value) => value.score > 70).map((value) => (
        value.firstName.toUpperCase()
        // value.lastName.toUpperCase()
        ));
        console.log(gradesObject);
}
