//-----------------------------------
// GLOBAL MAIN ACTIONS
//-----------------------------------
// FOR CALENDAR_PAGE SECTION
export const CALENDAR_PAGE_ADD_SCHEDULE_TO        = 'CALENDAR_PAGE_ADD_SCHEDULE_TO';        // Add schedules from prism side bar in the calendar page
export const CALENDAR_PAGE_ADD_RECURRING_TO_DATE  = 'CALENDAR_PAGE_ADD_RECURRING_TO_DATE';  // Add recurring job from the calendar page by clicking the plus symbol from top "Monday" "Tuesday" etc.
export const CALENDAR_PAGE_CHANGE_DAYS            = 'CALENDAR_PAGE_CHANGE_DAYS';            // A main action that will trigger when < and > is clicked when changing the 7 days from the main calendar page
export const CALENDAR_PAGE_CHANGE_GET_JOBS        = 'CALENDAR_PAGE_CHANGE_GET_JOBS';        // A helper action that will change both master(normal jobs) and programmers_jobs from the GLOBAL STATE when CALENDAR_PAGE_CHANGE_DAYS action is invoked
export const CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE  = 'CALENDAR_PAGE_MOVE_DEP_SIDE_BY_SIDE';  // A main action that will trigger when a job is dragged to a different day or when click left and right
export const CALENDAR_PAGE_VIEW_DATE_GET_JOBS     = 'CALENDAR_PAGE_VIEW_DATE_GET_JOBS';     // A main action ViewDate.js to get the jobs in that particular date. view_date_jobs is added to the global state for viewing
export const CALENDAR_PAGE_REFRESH                = 'CALENDAR_PAGE_REFRESH';                // A main action that needs to be triggered when calendar page display needs to change. Calendar page ONLY. Eg by adding a new job, changing the date in the caledar , changing the date on a department job
export const CALENDAR_MAIN_PAGE_REFRESH           = 'CALENDAR_MAIN_PAGE_REFRESH';           // A main action of "Back to calendar" of the ViewDate.js. That will try to re-arrange the GLOBAL state again properly after viewing a particular date jobs.
export const CALENDAR_VIEW_DAY_SET_CALENDAR_DATE  = 'CALENDAR_VIEW_DAY_SET_CALENDAR_DATE';  // A main action in ViewDate.js, ManageJobsPage.js, ManageTasksPage.js. As date jobs are different from the calendar page jobs, to change between viewing jobs on that particular date. Its also a BUG-FIXER when navigation to different main pages.


// FOR MANAGE_JOB SECTION
export const MANAGE_JOB_ADD_NEW_EDIT              = 'MANAGE_JOB_ADD_NEW_EDIT';      // A main action to add job bag from the manage jobs page
export const MANAGE_JOB_UPDATE_VIEWS              = 'MANAGE_JOB_UPDATE_VIEWS';      // A main action that will update the display when a control filter is changed in the Job Bags tab in the main manage jobs link. This does not alter any GLOBAL state

// FOR MY TASKS SECTION
export const MANAGE_TASKS_ACTION                  = 'MANAGE_TASKS_ACTION';          // Nothing yet

// FOR USER SETTINGS SECTION
export const USER_SETTINGS_SAVE                   = 'USER_SETTINGS_SAVE';           // Saving a particular users setting

// FOR SCHEDULING SETTINGS SECTION
export const ST_SETTINGS_SAVE                     = 'ST_SETTINGS_SAVE';             // Saving the scheduling tool settings

//-----------------------------------
// GLOBAL CONSTANT/HELPER ACTIONS
//-----------------------------------
/*
RESET_ALL_ACTION:  A helper action that resets all actions. Currently any action that is triggered will be broadcast through out the whole application so any component can react to it when needed.
                   Resetting the action back to nothing will make components trigger an action only once.
*/
export const RESET_ALL_ACTION                     = 'RESET_ALL_ACTION';                       
export const IS_WORKING                           = 'IS_WORKING';   // A helper action for any main action that will display a loding image to be displayed. To remind users that its currently doing something.


