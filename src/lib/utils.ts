import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { projects } from './data/projects';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getProject = (id: number) => {
  return projects.find((project) => project.id === Number(id));
};
