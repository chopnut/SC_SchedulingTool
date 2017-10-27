USE [PWIN171]
GO

INSERT INTO [dbo].[RMI1]
           ([RM_ADD_OP]
           ,[RM_ADD_DATE]
           ,[RM_ADD_TIME]
           ,[RM_EDIT_OP]
           ,[RM_EDIT_DATE]
           ,[RM_EDIT_TIME]
           ,[RM_CUST]
           ,[RM_NUMBER]
           ,[RM_NAME]
           ,[RM_NOTE_1]
           ,[RM_NOTE_2]
           ,[RM_NOTE_3]
           ,[RM_DBL_1]
           ,[RM_DBL_2]
           ,[RM_DBL_3]
           ,[RM_DATE_1]
           ,[RM_ACTIVE]
           ,[RM_COY_NUM]
           ,[RM_TAX_NUM]
           ,[RM_BUYER_NAME]
           ,[RM_BUYER_SAL]
           ,[RM_BUYER_PHONE]
           ,[RM_ACCTS_NAME]
           ,[RM_ACCTS_SAL]
           ,[RM_ACCTS_PHONE]
           ,[RM_PARENT]
           ,[RM_REP]
           ,[RM_AREA]
           ,[RM_ANAL]
           ,[RM_SOURCE]
           ,[RM_INDUSTRY]
           ,[RM_INDUSTRY_1]
           ,[RM_INDUSTRY_2]
           ,[RM_INDUSTRY_3]
           ,[RM_INDUSTRY_4]
           ,[RM_CATEGORY]
           ,[RM_PROGRAM]
           ,[RM_PROGRAM_1]
           ,[RM_PROGRAM_2]
           ,[RM_PROGRAM_3]
           ,[RM_PROGRAM_4]
           ,[RM_PROGRAM_5]
           ,[RM_PROGRAM_6]
           ,[RM_PROGRAM_7]
           ,[RM_PROGRAM_8]
           ,[RM_PROGRAM_9]
           ,[RM_STD_ACCT]
           ,[RM_STD_BRANCH]
           ,[RM_USAGE]
           ,[RM_CURR]
           ,[RM_BAL_TYPE]
           ,[RM_STATUS]
           ,[RM_DELETE]
           ,[RM_TERMS]
           ,[RM_TERM_DAY]
           ,[RM_CRD_LIMIT]
           ,[RM_CRD_RATING]
           ,[RM_OVERDUE_INT]
           ,[RM_AGING_INT]
           ,[RM_INSTANT]
           ,[RM_ARTWORK_FILE]
           ,[RM_NEW_EXPIRY]
           ,[RM_STMT_MSGS]
           ,[RM_STD_METHOD]
           ,[RM_STD_CB_BANK]
           ,[RM_STD_RCPT_TYPE]
           ,[RM_STD_CUST_BANK]
           ,[RM_STD_CUST_BRAN]
           ,[RM_STD_DRAWER]
           ,[RM_STD_REFERENCE]
           ,[RM_SEC_RCPT_TYPE]
           ,[RM_SEC_CUST_BANK]
           ,[RM_SEC_CUST_BRAN]
           ,[RM_SEC_DRAWER]
           ,[RM_SEC_REFERENCE]
           ,[RM_PROMPT_DISC]
           ,[RM_STD_TAX]
           ,[RM_INV_DISC]
           ,[RM_PRICE_SCALE]
           ,[RM_BROKER_COMM]
           ,[RM_JOB_MARKUP]
           ,[RM_JOB_GRADING]
           ,[RM_JOB_PRIORITY]
           ,[RM_WIP_TOTAL]
           ,[RM_PAY_HIST]
           ,[RM_PAY_HIST_1]
           ,[RM_PAY_HIST_2]
           ,[RM_PAY_HIST_3]
           ,[RM_PAY_HIST_4]
           ,[RM_PAY_HIST_5]
           ,[RM_PAY_HIST_6]
           ,[RM_PAY_HIST_7]
           ,[RM_PAY_HIST_8]
           ,[RM_PAY_HIST_9]
           ,[RM_PAY_HIST_10]
           ,[RM_PAY_HIST_11]
           ,[RM_COLLECT_NUM]
           ,[RM_COLLECT_DAYS]
           ,[RM_LAST_RCPT_DATE]
           ,[RM_LAST_RCPT]
           ,[RM_LAST_RCPT_1]
           ,[RM_LAST_INV_DATE]
           ,[RM_LAST_INV]
           ,[RM_LAST_INV_1]
           ,[RM_LAST_QUOTE_DATE]
           ,[RM_LAST_JOB_DATE]
           ,[RM_FIRST_JOB_DATE]
           ,[RM_BAL4]
           ,[RM_BAL4_1]
           ,[RM_BAL4_2]
           ,[RM_BAL4_3]
           ,[RM_BAL3]
           ,[RM_BAL3_1]
           ,[RM_BAL3_2]
           ,[RM_BAL3_3]
           ,[RM_BAL2]
           ,[RM_BAL2_1]
           ,[RM_BAL2_2]
           ,[RM_BAL2_3]
           ,[RM_BAL1]
           ,[RM_BAL1_1]
           ,[RM_BAL1_2]
           ,[RM_BAL1_3]
           ,[RM_BAL0]
           ,[RM_BAL0_1]
           ,[RM_BAL0_2]
           ,[RM_BAL0_3]
           ,[RM_BAL_OWE]
           ,[RM_BAL_OWE_1]
           ,[RM_BAL_OWE_2]
           ,[RM_BAL_OWE_3]
           ,[RM_BAL_FUT]
           ,[RM_BAL_FUT_1]
           ,[RM_BAL_FUT_2]
           ,[RM_BAL_FUT_3]
           ,[RM_BAL_TOT]
           ,[RM_BAL_TOT_1]
           ,[RM_BAL_TOT_2]
           ,[RM_BAL_TOT_3]
           ,[RM_HAS_BAL]
           ,[RM_PIC_PATH]
           ,[RM_STOCK_VAL]
           ,[RM_QUOTES_OUT]
           ,[RM_QUOTES_VAL]
           ,[RM_JOBS_OUT]
           ,[RM_JOBS_VAL]
           ,[RM_SALUT]
           ,[RM_TITLE]
           ,[RM_TYPE]
           ,[RM_TERR]
           ,[RM_CPO_PROF]
           ,[RM_CFO_PROF]
           ,[RM_STAFF]
           ,[RM_TURNOVER]
           ,[RM_SUPP]
           ,[RM_COMPET]
           ,[RM_OPERATIONS]
           ,[RM_IDDET]
           ,[RM_GOALS]
           ,[RM_PRODUCTS]
           ,[RM_COMPTN]
           ,[RM_POTENT]
           ,[RM_COMMENT]
           ,[RM_PRIOR]
           ,[RM_MANAG]
           ,[RM_SPARE]
           ,[RM_CYCLE_USE]
           ,[RM_CYCLE]
           ,[RM_CYCLE_DESC]
           ,[RM_CYCLE_DATE]
           ,[RM_CYCLE_TIME]
           ,[RM_SPARE_LONG_1]
           ,[RM_SPARE_LONG_2]
           ,[RM_SPARE_LONG_3]
           ,[RM_SPARE_DOUBLE_1]
           ,[RM_SPARE_DOUBLE_2]
           ,[RM_SPARE_DOUBLE_3]
           ,[RM_SPARE_DOUBLE_4]
           ,[RM_SPARE_CHAR_1]
           ,[RM_SPARE_CHAR_2]
           ,[RM_SPARE_CHAR_3]
           ,[RM_SPARE_CHAR_4]
           ,[RM_SPARE_CHAR_5]
           ,[RM_JOB_OVERRUN]
           ,[RM_COORDINATOR]
           ,[RM_OVERDUE_LIMIT]
           ,[RM_OVERDUE_AGING]
           ,[RM_ALLOW_PARTIAL]
           ,[RM_COLOUR]
           ,[RM_GROUP_CUST]
           ,[RM_SOP_LEAD_DAYS]
           ,[RM_INTER_COY]
           ,[RM_DEF_ACTION]
           ,[RM_DEF_CHARGE]
           ,[RM_DEF_STATUS]
           ,[RM_DEF_SELECTION]
           ,[RM_DEF_CHRG_DESP]
           ,[RM_STYLE]
           ,[RM_AS_AT_ERA]
           ,[RM_CHECK_SUM]
           ,[RM_CURRENT_WIP_QJ]
           ,[RM_CURRENT_WIP_SO]
           ,[RM_STD_TAX_X]
           ,[RM_STD_TAX_X_1]
           ,[RM_STD_TAX_X_2]
           ,[RM_STD_TAX_X_3]
           ,[RM_ESD_USERS]
           ,[RM_ESD_ADMINISTRATOR]
           ,[RM_ESD_EDIT_USERS]
           ,[RM_EXT_REF]
           ,[RM_PICKPACK_CHG_TYPE]
           ,[RM_PICKPACK_CHG]
           ,[RM_PICKPACK_CHG_1]
           ,[RM_ORDER_PROCESS_CHG]
           ,[RM_ORDER_PROCESS_CHG_1]
           ,[RM_GRADING]
           ,[RM_LEVEL_ID]
           ,[RM_INVOICE_TYPE]
           ,[RM_DISC_TERMS]
           ,[RM_DISC_DAYS]
           ,[RM_DISC_DAYS_2]
           ,[RM_TERM_DAY_2]
           ,[RM_CUT_OFF_DAY]
           ,[RM_UID]
           ,[oid])
     VALUES
           (<RM_ADD_OP, char(6),>
           ,<RM_ADD_DATE, smalldatetime,>
           ,<RM_ADD_TIME, int,>
           ,<RM_EDIT_OP, char(6),>
           ,<RM_EDIT_DATE, smalldatetime,>
           ,<RM_EDIT_TIME, int,>
           ,<RM_CUST, char(12),>
           ,<RM_NUMBER, int,>
           ,<RM_NAME, char(72),>
           ,<RM_NOTE_1, char(36),>
           ,<RM_NOTE_2, char(36),>
           ,<RM_NOTE_3, char(36),>
           ,<RM_DBL_1, numeric(26,8),>
           ,<RM_DBL_2, numeric(26,8),>
           ,<RM_DBL_3, numeric(26,8),>
           ,<RM_DATE_1, smalldatetime,>
           ,<RM_ACTIVE, smallint,>
           ,<RM_COY_NUM, char(22),>
           ,<RM_TAX_NUM, char(22),>
           ,<RM_BUYER_NAME, char(36),>
           ,<RM_BUYER_SAL, char(12),>
           ,<RM_BUYER_PHONE, char(22),>
           ,<RM_ACCTS_NAME, char(36),>
           ,<RM_ACCTS_SAL, char(12),>
           ,<RM_ACCTS_PHONE, char(22),>
           ,<RM_PARENT, char(12),>
           ,<RM_REP, char(12),>
           ,<RM_AREA, char(12),>
           ,<RM_ANAL, char(12),>
           ,<RM_SOURCE, char(12),>
           ,<RM_INDUSTRY, char(12),>
           ,<RM_INDUSTRY_1, char(12),>
           ,<RM_INDUSTRY_2, char(12),>
           ,<RM_INDUSTRY_3, char(12),>
           ,<RM_INDUSTRY_4, char(12),>
           ,<RM_CATEGORY, smallint,>
           ,<RM_PROGRAM, char(12),>
           ,<RM_PROGRAM_1, char(12),>
           ,<RM_PROGRAM_2, char(12),>
           ,<RM_PROGRAM_3, char(12),>
           ,<RM_PROGRAM_4, char(12),>
           ,<RM_PROGRAM_5, char(12),>
           ,<RM_PROGRAM_6, char(12),>
           ,<RM_PROGRAM_7, char(12),>
           ,<RM_PROGRAM_8, char(12),>
           ,<RM_PROGRAM_9, char(12),>
           ,<RM_STD_ACCT, char(18),>
           ,<RM_STD_BRANCH, char(6),>
           ,<RM_USAGE, smallint,>
           ,<RM_CURR, char(6),>
           ,<RM_BAL_TYPE, smallint,>
           ,<RM_STATUS, smallint,>
           ,<RM_DELETE, smallint,>
           ,<RM_TERMS, smallint,>
           ,<RM_TERM_DAY, smallint,>
           ,<RM_CRD_LIMIT, numeric(26,8),>
           ,<RM_CRD_RATING, smallint,>
           ,<RM_OVERDUE_INT, numeric(26,8),>
           ,<RM_AGING_INT, smallint,>
           ,<RM_INSTANT, smallint,>
           ,<RM_ARTWORK_FILE, char(82),>
           ,<RM_NEW_EXPIRY, smalldatetime,>
           ,<RM_STMT_MSGS, smallint,>
           ,<RM_STD_METHOD, char(12),>
           ,<RM_STD_CB_BANK, char(12),>
           ,<RM_STD_RCPT_TYPE, char(12),>
           ,<RM_STD_CUST_BANK, char(22),>
           ,<RM_STD_CUST_BRAN, char(22),>
           ,<RM_STD_DRAWER, char(36),>
           ,<RM_STD_REFERENCE, char(22),>
           ,<RM_SEC_RCPT_TYPE, char(12),>
           ,<RM_SEC_CUST_BANK, char(22),>
           ,<RM_SEC_CUST_BRAN, char(22),>
           ,<RM_SEC_DRAWER, char(36),>
           ,<RM_SEC_REFERENCE, char(22),>
           ,<RM_PROMPT_DISC, numeric(26,8),>
           ,<RM_STD_TAX, char(6),>
           ,<RM_INV_DISC, numeric(26,8),>
           ,<RM_PRICE_SCALE, smallint,>
           ,<RM_BROKER_COMM, numeric(26,8),>
           ,<RM_JOB_MARKUP, numeric(26,8),>
           ,<RM_JOB_GRADING, smallint,>
           ,<RM_JOB_PRIORITY, smallint,>
           ,<RM_WIP_TOTAL, numeric(26,8),>
           ,<RM_PAY_HIST, smallint,>
           ,<RM_PAY_HIST_1, smallint,>
           ,<RM_PAY_HIST_2, smallint,>
           ,<RM_PAY_HIST_3, smallint,>
           ,<RM_PAY_HIST_4, smallint,>
           ,<RM_PAY_HIST_5, smallint,>
           ,<RM_PAY_HIST_6, smallint,>
           ,<RM_PAY_HIST_7, smallint,>
           ,<RM_PAY_HIST_8, smallint,>
           ,<RM_PAY_HIST_9, smallint,>
           ,<RM_PAY_HIST_10, smallint,>
           ,<RM_PAY_HIST_11, smallint,>
           ,<RM_COLLECT_NUM, int,>
           ,<RM_COLLECT_DAYS, int,>
           ,<RM_LAST_RCPT_DATE, smalldatetime,>
           ,<RM_LAST_RCPT, numeric(26,8),>
           ,<RM_LAST_RCPT_1, numeric(26,8),>
           ,<RM_LAST_INV_DATE, smalldatetime,>
           ,<RM_LAST_INV, numeric(26,8),>
           ,<RM_LAST_INV_1, numeric(26,8),>
           ,<RM_LAST_QUOTE_DATE, smalldatetime,>
           ,<RM_LAST_JOB_DATE, smalldatetime,>
           ,<RM_FIRST_JOB_DATE, smalldatetime,>
           ,<RM_BAL4, numeric(26,8),>
           ,<RM_BAL4_1, numeric(26,8),>
           ,<RM_BAL4_2, numeric(26,8),>
           ,<RM_BAL4_3, numeric(26,8),>
           ,<RM_BAL3, numeric(26,8),>
           ,<RM_BAL3_1, numeric(26,8),>
           ,<RM_BAL3_2, numeric(26,8),>
           ,<RM_BAL3_3, numeric(26,8),>
           ,<RM_BAL2, numeric(26,8),>
           ,<RM_BAL2_1, numeric(26,8),>
           ,<RM_BAL2_2, numeric(26,8),>
           ,<RM_BAL2_3, numeric(26,8),>
           ,<RM_BAL1, numeric(26,8),>
           ,<RM_BAL1_1, numeric(26,8),>
           ,<RM_BAL1_2, numeric(26,8),>
           ,<RM_BAL1_3, numeric(26,8),>
           ,<RM_BAL0, numeric(26,8),>
           ,<RM_BAL0_1, numeric(26,8),>
           ,<RM_BAL0_2, numeric(26,8),>
           ,<RM_BAL0_3, numeric(26,8),>
           ,<RM_BAL_OWE, numeric(26,8),>
           ,<RM_BAL_OWE_1, numeric(26,8),>
           ,<RM_BAL_OWE_2, numeric(26,8),>
           ,<RM_BAL_OWE_3, numeric(26,8),>
           ,<RM_BAL_FUT, numeric(26,8),>
           ,<RM_BAL_FUT_1, numeric(26,8),>
           ,<RM_BAL_FUT_2, numeric(26,8),>
           ,<RM_BAL_FUT_3, numeric(26,8),>
           ,<RM_BAL_TOT, numeric(26,8),>
           ,<RM_BAL_TOT_1, numeric(26,8),>
           ,<RM_BAL_TOT_2, numeric(26,8),>
           ,<RM_BAL_TOT_3, numeric(26,8),>
           ,<RM_HAS_BAL, smallint,>
           ,<RM_PIC_PATH, char(82),>
           ,<RM_STOCK_VAL, smallint,>
           ,<RM_QUOTES_OUT, int,>
           ,<RM_QUOTES_VAL, numeric(26,8),>
           ,<RM_JOBS_OUT, int,>
           ,<RM_JOBS_VAL, numeric(26,8),>
           ,<RM_SALUT, char(12),>
           ,<RM_TITLE, char(12),>
           ,<RM_TYPE, smallint,>
           ,<RM_TERR, char(12),>
           ,<RM_CPO_PROF, char(12),>
           ,<RM_CFO_PROF, char(12),>
           ,<RM_STAFF, smallint,>
           ,<RM_TURNOVER, numeric(26,8),>
           ,<RM_SUPP, char(12),>
           ,<RM_COMPET, char(12),>
           ,<RM_OPERATIONS, char(36),>
           ,<RM_IDDET, char(36),>
           ,<RM_GOALS, char(36),>
           ,<RM_PRODUCTS, char(36),>
           ,<RM_COMPTN, char(36),>
           ,<RM_POTENT, char(36),>
           ,<RM_COMMENT, char(36),>
           ,<RM_PRIOR, char(12),>
           ,<RM_MANAG, char(12),>
           ,<RM_SPARE, char(12),>
           ,<RM_CYCLE_USE, smallint,>
           ,<RM_CYCLE, int,>
           ,<RM_CYCLE_DESC, char(36),>
           ,<RM_CYCLE_DATE, smalldatetime,>
           ,<RM_CYCLE_TIME, int,>
           ,<RM_SPARE_LONG_1, int,>
           ,<RM_SPARE_LONG_2, int,>
           ,<RM_SPARE_LONG_3, int,>
           ,<RM_SPARE_DOUBLE_1, numeric(26,8),>
           ,<RM_SPARE_DOUBLE_2, numeric(26,8),>
           ,<RM_SPARE_DOUBLE_3, numeric(26,8),>
           ,<RM_SPARE_DOUBLE_4, numeric(26,8),>
           ,<RM_SPARE_CHAR_1, char(36),>
           ,<RM_SPARE_CHAR_2, char(36),>
           ,<RM_SPARE_CHAR_3, char(36),>
           ,<RM_SPARE_CHAR_4, char(36),>
           ,<RM_SPARE_CHAR_5, char(36),>
           ,<RM_JOB_OVERRUN, numeric(26,8),>
           ,<RM_COORDINATOR, char(36),>
           ,<RM_OVERDUE_LIMIT, numeric(26,8),>
           ,<RM_OVERDUE_AGING, smallint,>
           ,<RM_ALLOW_PARTIAL, smallint,>
           ,<RM_COLOUR, int,>
           ,<RM_GROUP_CUST, char(12),>
           ,<RM_SOP_LEAD_DAYS, smallint,>
           ,<RM_INTER_COY, smallint,>
           ,<RM_DEF_ACTION, smallint,>
           ,<RM_DEF_CHARGE, smallint,>
           ,<RM_DEF_STATUS, smallint,>
           ,<RM_DEF_SELECTION, smallint,>
           ,<RM_DEF_CHRG_DESP, smallint,>
           ,<RM_STYLE, char(12),>
           ,<RM_AS_AT_ERA, int,>
           ,<RM_CHECK_SUM, int,>
           ,<RM_CURRENT_WIP_QJ, numeric(26,8),>
           ,<RM_CURRENT_WIP_SO, numeric(26,8),>
           ,<RM_STD_TAX_X, char(6),>
           ,<RM_STD_TAX_X_1, char(6),>
           ,<RM_STD_TAX_X_2, char(6),>
           ,<RM_STD_TAX_X_3, char(6),>
           ,<RM_ESD_USERS, smallint,>
           ,<RM_ESD_ADMINISTRATOR, char(12),>
           ,<RM_ESD_EDIT_USERS, smallint,>
           ,<RM_EXT_REF, char(36),>
           ,<RM_PICKPACK_CHG_TYPE, smallint,>
           ,<RM_PICKPACK_CHG, numeric(26,8),>
           ,<RM_PICKPACK_CHG_1, numeric(26,8),>
           ,<RM_ORDER_PROCESS_CHG, numeric(26,8),>
           ,<RM_ORDER_PROCESS_CHG_1, numeric(26,8),>
           ,<RM_GRADING, char(12),>
           ,<RM_LEVEL_ID, char(16),>
           ,<RM_INVOICE_TYPE, smallint,>
           ,<RM_DISC_TERMS, smallint,>
           ,<RM_DISC_DAYS, smallint,>
           ,<RM_DISC_DAYS_2, smallint,>
           ,<RM_TERM_DAY_2, smallint,>
           ,<RM_CUT_OFF_DAY, smallint,>
           ,<RM_UID, int,>
           ,<oid, uniqueidentifier,>)
GO

