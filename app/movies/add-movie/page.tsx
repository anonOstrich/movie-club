'use client';

import FormRow from '@/components/FormRow';
import MovieApiSearch from '@/components/MovieApiSearch';
import { addNewMovie } from '@/utils/api';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import { toast } from 'react-toastify';

export default function AddMoviePage() {
  const [title, setTitle] = useState<string>('');
  const [year, setYear] = useState<number>(2000);
  const [description, setDescription] = useState<string>('');

  const router = useRouter();

  function fillFormWithMovieDetails(
    title: string,
    year: number,
    description: string
  ) {
    setTitle(title);
    setYear(year);
    setDescription(description);
  }

  const handleFormSubmission: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addNewMovie(title, year, description);
    setTitle('');
    setYear(2000);
    setDescription('');
    toast.success('Successfully added');
    router.push('/movies');
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="space-y-4">
      <h1 className="prose dark:prose-invert prose-2xl">
        Add a new movie option to choose for events
      </h1>

      <p className="prose dark:prose-invert prose-md">
        You can search for the movie by its title to automatically fill in the
        form, or add the details manually.
      </p>

      <MovieApiSearch
        completeMovieInformationCallBack={fillFormWithMovieDetails}
      />

      <form
        onSubmit={handleFormSubmission}
        className="form prose dark:prose-invert"
      >
        <FormRow
          displayValue="Title"
          separateDisplayValue
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormRow
          displayValue="Year"
          separateDisplayValue
          name="year"
          type="number"
          //min={1880} max={currentYear}
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />

        <FormRow
          displayValue="Description"
          separateDisplayValue
          name="description"
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="button m-auto">
          Submit
        </button>
      </form>
    </div>
  );
}
