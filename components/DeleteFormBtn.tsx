'use client'

import React, { useTransition } from 'react';
import { Button } from './ui/button';
import { DeleteForm, UpdateFormContent } from '@/actions/form';
import { toast } from './ui/use-toast';
import { FaSpinner } from 'react-icons/fa';
import { BiSolidTrash } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';

function DeleteFormBtn({ id }: { id: number }) {
  const [loading, startTransition] = useTransition();

  const router = useRouter();

  const deleteForm = async () => {
    try {
      await DeleteForm(id);
      router.push('/');
      router.refresh();

      toast({
        title: 'Success',
        description: 'Your form has been deleted',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={'destructive'}
          className="gap-2 text-white"
        >
          <BiSolidTrash className="h-4 w-4" />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Deleting this form is permanent and cannot be undone. Once deleted,
            the form and its submissions will be permanently removed and cannot
            be recovered. <br />
            <br />
            <span className="font-medium">
              Deleting this form will make it inaccessible and permanently
              remove it, along with all its submissions.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              startTransition(deleteForm);
            }}
          >
            Proceed {loading && <FaSpinner className="animate-spin" />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteFormBtn;
