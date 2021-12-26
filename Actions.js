export const daysInInput = daysIn => (
    {
      type: 'RECEIVE_DAYS_IN',
      payload: daysIn,
    }
  );

export const daysOutInput = daysOut => (
    {
      type: 'RECEIVE_DAYS_OUT',
      payload: daysOut,
    }
  );  

export const firstDateInput = firstDate => (
    {
      type: 'RECEIVE_FIRST_DATE',
      payload: firstDate,
    }
  );  