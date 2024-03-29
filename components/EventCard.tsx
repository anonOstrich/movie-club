import { Event } from '@prisma/client';
import Link from 'next/link';

export async function EventCard({ event }: { event: Event }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="inline-block border-2 rounded-md p-5 transition-all
                 hover:border-4
                hover:shadow-lg hover:scale-105 hover:duration-500 w-full text-center
            "
    >
      {event.title} -{' '}
      <span className="inline-block px-3">
        {event.plannedDate.toLocaleDateString()}
      </span>
    </Link>
  );
}
