import dynamic from "next/dynamic";
import NotepadScript from '../../components/scripts/NotepadScript';

const NotepadWrap = dynamic(() => import('../../components/Notepad'))

export default function Notepad() {
    return (
        <div className="notepad-container">
        <NotepadScript>
            <NotepadWrap/>
        </NotepadScript>
        </div>
    )
}