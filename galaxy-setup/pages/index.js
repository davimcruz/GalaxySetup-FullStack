import { useRouter } from 'next/router';

export default function Notepad() {

    const router = useRouter();
    if (typeof window !== 'undefined') {
        router.push('/notepad');
    }

    return <></>;
}
