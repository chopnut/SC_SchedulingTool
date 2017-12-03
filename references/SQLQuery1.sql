USE [PWIN171]
GO

/****** Object:  Table [dbo].[QMI1]    Script Date: 1/12/2017 10:35:59 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[QMI1](
	[ID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[QM_ADD_OP] [char](6) NOT NULL DEFAULT (''),
	[QM_ADD_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_ADD_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_EDIT_OP] [char](6) NOT NULL DEFAULT (''),
	[QM_EDIT_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_EDIT_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_LOCK_OP] [char](6) NOT NULL DEFAULT (''),
	[QM_QUOTE_JOB] [smallint] NOT NULL DEFAULT ((0)),
	[QM_QUOTE_NUM] [char](12) NOT NULL DEFAULT (''),
	[QM_JOB_NUM] [char](12) NOT NULL DEFAULT (''),
	[QM_PRJ_NUM] [char](12) NOT NULL DEFAULT (''),
	[QM_NUMBER] [char](12) NOT NULL DEFAULT (''),
	[QM_REV_NUM] [char](6) NOT NULL DEFAULT (''),
	[QM_REV_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_REV_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_REV_OPR] [char](6) NOT NULL DEFAULT (''),
	[QM_STYLE_CODE] [char](4) NOT NULL DEFAULT (''),
	[QM_REP_JOB_NUM] [char](12) NOT NULL DEFAULT (''),
	[QM_REP_COLUMN] [smallint] NOT NULL DEFAULT ((0)),
	[QM_REP_PART] [char](6) NOT NULL DEFAULT (''),
	[QM_REP_MODEL] [smallint] NOT NULL DEFAULT ((0)),
	[QM_REP_TYPE] [smallint] NOT NULL DEFAULT ((0)),
	[QM_MODEL_QUOTE] [char](12) NOT NULL DEFAULT (''),
	[QM_RUN_NUM] [int] NOT NULL DEFAULT ((0)),
	[QM_SOURCE_QUOTE] [char](12) NOT NULL DEFAULT (''),
	[QM_SOURCE_VAR] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SOURCE_QTY] [char](12) NOT NULL DEFAULT (''),
	[QM_SOURCE_PART] [char](6) NOT NULL DEFAULT (''),
	[QM_SOURCE_MODEL] [smallint] NOT NULL DEFAULT ((0)),
	[QM_ORIG_QUOTE] [char](12) NOT NULL DEFAULT (''),
	[QM_ORIG_VAR] [smallint] NOT NULL DEFAULT ((0)),
	[QM_ORIG_QTY] [char](12) NOT NULL DEFAULT (''),
	[QM_ORIG_PART] [char](6) NOT NULL DEFAULT (''),
	[QM_COPY_JOB] [char](12) NOT NULL DEFAULT (''),
	[QM_COPY_COLUMN] [smallint] NOT NULL DEFAULT ((0)),
	[QM_COPY_J_PART] [char](6) NOT NULL DEFAULT (''),
	[QM_COPY_QUOTE] [char](12) NOT NULL DEFAULT (''),
	[QM_COPY_VAR] [smallint] NOT NULL DEFAULT ((0)),
	[QM_COPY_QTY] [char](12) NOT NULL DEFAULT (''),
	[QM_COPY_Q_PART] [char](6) NOT NULL DEFAULT (''),
	[QM_JOINT_STATUS] [smallint] NOT NULL DEFAULT ((0)),
	[QM_QUOTE_STATUS] [smallint] NOT NULL DEFAULT ((0)),
	[QM_JOB_STATUS] [smallint] NOT NULL DEFAULT ((0)),
	[QM_LIVE_STATUS] [smallint] NOT NULL DEFAULT ((0)),
	[QM_USER_STATUS] [smallint] NOT NULL DEFAULT ((0)),
	[QM_DEL_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_IS_CONVERTED] [smallint] NOT NULL DEFAULT ((0)),
	[QM_PRINTED] [smallint] NOT NULL DEFAULT ((0)),
	[QM_COPY_RATES] [smallint] NOT NULL DEFAULT ((0)),
	[QM_IMPORT_UPDATE] [smallint] NOT NULL DEFAULT ((0)),
	[QM_CRED_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_CRED_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_CRED_AMT] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_CRED_OP] [char](6) NOT NULL DEFAULT (''),
	[QM_HELD] [smallint] NOT NULL DEFAULT ((0)),
	[QM_PROOF] [char](12) NOT NULL DEFAULT (''),
	[QM_DELIV_METHOD] [char](12) NOT NULL DEFAULT (''),
	[QM_ART_METHOD] [char](12) NOT NULL DEFAULT (''),
	[QM_DES_TYPE] [smallint] NOT NULL DEFAULT ((0)),
	[QM_REC_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_REC_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_OWN_OP] [char](6) NOT NULL DEFAULT (''),
	[QM_RESP_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_RESP_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_RESP_OP] [char](6) NOT NULL DEFAULT (''),
	[QM_RESP_OP_1] [char](6) NOT NULL DEFAULT (''),
	[QM_RESP_OP_2] [char](6) NOT NULL DEFAULT (''),
	[QM_RESP_OP_3] [char](6) NOT NULL DEFAULT (''),
	[QM_RESP_OP_4] [char](6) NOT NULL DEFAULT (''),
	[QM_RESP_OP_5] [char](6) NOT NULL DEFAULT (''),
	[QM_RECONTACT] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_REQ_FLAG] [smallint] NOT NULL DEFAULT ((0)),
	[QM_ORIG_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_ORIG_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_PREF_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_PREF_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_LATE_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_LATE_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_TITLE] [char](72) NOT NULL DEFAULT (''),
	[QM_DELIV_CODE] [char](12) NOT NULL DEFAULT (''),
	[QM_CLT_SPEC] [char](22) NOT NULL DEFAULT (''),
	[QM_TAX_REF] [char](22) NOT NULL DEFAULT (''),
	[QM_CONTACT] [char](36) NOT NULL DEFAULT (''),
	[QM_PHONE] [char](22) NOT NULL DEFAULT (''),
	[QM_FAX] [char](22) NOT NULL DEFAULT (''),
	[QM_ORDER] [char](20) NOT NULL DEFAULT (''),
	[QM_ORDER_CFM] [smallint] NOT NULL DEFAULT ((0)),
	[QM_ORDER_REL] [char](6) NOT NULL DEFAULT (''),
	[QM_REP] [char](12) NOT NULL DEFAULT (''),
	[QM_REP_1] [char](12) NOT NULL DEFAULT (''),
	[QM_REP_2] [char](12) NOT NULL DEFAULT (''),
	[QM_REP_3] [char](12) NOT NULL DEFAULT (''),
	[QM_REP_4] [char](12) NOT NULL DEFAULT (''),
	[QM_REP_5] [char](12) NOT NULL DEFAULT (''),
	[QM_COORDINATOR] [char](12) NOT NULL DEFAULT (''),
	[QM_PRIORITY] [smallint] NOT NULL DEFAULT ((0)),
	[QM_TYPE_CODE] [char](12) NOT NULL DEFAULT (''),
	[QM_GRADE] [smallint] NOT NULL DEFAULT ((0)),
	[QM_FIN_SIZE_CODE] [char](12) NOT NULL DEFAULT (''),
	[QM_FIN_WID] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_FIN_LEN] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_FIN_DEP] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_FIN_GUSS] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_FIN_GSM] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_FIN_UNIT] [char](12) NOT NULL DEFAULT (''),
	[QM_ORIENT] [smallint] NOT NULL DEFAULT ((0)),
	[QM_PROD_CODE] [char](22) NOT NULL DEFAULT (''),
	[QM_FIN_GOOD] [char](22) NOT NULL DEFAULT (''),
	[QM_CUST_CODE] [char](12) NOT NULL DEFAULT (''),
	[QM_CUST_CODE_1] [char](12) NOT NULL DEFAULT (''),
	[QM_CUST_CODE_2] [char](12) NOT NULL DEFAULT (''),
	[QM_CUST_PROS] [smallint] NOT NULL DEFAULT ((0)),
	[QM_REQD_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_REQD_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_FOLIO] [char](12) NOT NULL DEFAULT (''),
	[QM_FOLIO_1] [char](12) NOT NULL DEFAULT (''),
	[QM_FOLIO_2] [char](12) NOT NULL DEFAULT (''),
	[QM_PACK_QTY] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_USAGE] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_REORDER] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_EACH_WGT] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_WGT_UNIT] [char](12) NOT NULL DEFAULT (''),
	[QM_RFQ_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_RFQ_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_RFQ_OPR] [char](6) NOT NULL DEFAULT (''),
	[QM_SALES_TYPE] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SALES_SRC] [char](12) NOT NULL DEFAULT (''),
	[QM_SALES_RSN] [char](12) NOT NULL DEFAULT (''),
	[QM_PROFILE] [char](12) NOT NULL DEFAULT (''),
	[QM_JOB_QTY] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_PREV_QTY] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_JOB_UNIT] [char](12) NOT NULL DEFAULT (''),
	[QM_PO_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_PO_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_PO_OP] [char](6) NOT NULL DEFAULT (''),
	[QM_DLY_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_DLY_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_QTY_DESP] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_TOTAL_DLY] [int] NOT NULL DEFAULT ((0)),
	[QM_SCHED_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_SCHED_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_CLOSE_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_CLOSE_TIME] [int] NOT NULL DEFAULT ((-1)),
	[QM_INV_NUM] [char](22) NOT NULL DEFAULT (''),
	[QM_PACK_NUM] [char](12) NOT NULL DEFAULT (''),
	[QM_DOWN_LOAD] [smallint] NOT NULL DEFAULT ((0)),
	[QM_TRACK_CODE] [char](4) NOT NULL DEFAULT (''),
	[QM_TAX_TYPE] [smallint] NOT NULL DEFAULT ((0)),
	[QM_TAX_CODE] [char](6) NOT NULL DEFAULT (''),
	[QM_CURR] [char](6) NOT NULL DEFAULT (''),
	[QM_EXCH_RATE] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_UNIT_QTY] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_UNIT_FLAG] [smallint] NOT NULL DEFAULT ((0)),
	[QM_RUNON_QTY] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_SPEC_QTY] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_CHARGEABLE] [smallint] NOT NULL DEFAULT ((0)),
	[QM_NC_REASON] [char](22) NOT NULL DEFAULT (''),
	[QM_CUST_MKUP] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_JOB_MKUP] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_BROKERAGE] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_CUST_DISC] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_INVOKED_BTNS] [int] NOT NULL DEFAULT ((0)),
	[QM_IMPORTED] [smallint] NOT NULL DEFAULT ((0)),
	[QM_IMPORT_RECALC] [smallint] NOT NULL DEFAULT ((0)),
	[QM_IMPORT_CONVERT] [smallint] NOT NULL DEFAULT ((0)),
	[QM_BRANCH] [char](6) NOT NULL DEFAULT (''),
	[QM_SPARE_ENUM] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_1] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_2] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_3] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_4] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_5] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_6] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_7] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_8] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_9] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_10] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_11] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_12] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_13] [smallint] NOT NULL DEFAULT ((0)),
	[QM_SPARE_ENUM_14] [smallint] NOT NULL DEFAULT ((0)),
	[QM_GRP_NUMBER] [char](12) NOT NULL DEFAULT (''),
	[QM_PLAN] [char](12) NOT NULL DEFAULT (''),
	[QM_UNIT_PRC] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_INT_INV_NUM] [char](12) NOT NULL DEFAULT (''),
	[QM_CUST_SPLIT] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_CUST_SPLIT_1] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_CUST_SPLIT_2] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_REP_SPLIT] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_REP_SPLIT_1] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_REP_SPLIT_2] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_REP_SPLIT_3] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_REP_SPLIT_4] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_REP_SPLIT_5] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_GRP_ACCT] [char](12) NOT NULL DEFAULT (''),
	[QM_GRP_ACCT_1] [char](12) NOT NULL DEFAULT (''),
	[QM_GRP_ACCT_2] [char](12) NOT NULL DEFAULT (''),
	[QM_GRP_ACCT_3] [char](12) NOT NULL DEFAULT (''),
	[QM_GRP_ACCT_4] [char](12) NOT NULL DEFAULT (''),
	[QM_GRP_ACCT_5] [char](12) NOT NULL DEFAULT (''),
	[QM_GRP_PERC] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_GRP_PERC_1] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_GRP_PERC_2] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_GRP_PERC_3] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_GRP_PERC_4] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_GRP_PERC_5] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_PRJ_STATUS] [smallint] NOT NULL DEFAULT ((0)),
	[QM_CODE] [char](72) NOT NULL DEFAULT (''),
	[QM_TEMPLATE] [smallint] NOT NULL DEFAULT ((0)),
	[QM_REPEAT_PERIOD] [int] NOT NULL DEFAULT ((0)),
	[QM_SPARE_LONGS] [int] NOT NULL DEFAULT ((0)),
	[QM_SPARE_LONGS_1] [int] NOT NULL DEFAULT ((0)),
	[QM_SPARE_LONGS_2] [int] NOT NULL DEFAULT ((0)),
	[QM_SPARE_LONGS_3] [int] NOT NULL DEFAULT ((0)),
	[QM_SPARE_LONGS_4] [int] NOT NULL DEFAULT ((0)),
	[QM_SPARE_LONGS_5] [int] NOT NULL DEFAULT ((0)),
	[QM_SPARE_NUMS] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_SPARE_NUMS_1] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_SPARE_NUMS_2] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_SPARE_NUMS_3] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_SPARE_NUMS_4] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_SPARE_NUMS_5] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_RESERVED_INTS] [int] NOT NULL DEFAULT ((0)),
	[QM_RESERVED_INTS_1] [int] NOT NULL DEFAULT ((0)),
	[QM_RESERVED_INTS_2] [int] NOT NULL DEFAULT ((0)),
	[QM_RESERVED_INTS_3] [int] NOT NULL DEFAULT ((0)),
	[QM_RESERVED_INTS_4] [int] NOT NULL DEFAULT ((0)),
	[QM_RESERVED_INTS_5] [int] NOT NULL DEFAULT ((0)),
	[QM_RESERVED_NUMS] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_RESERVED_NUMS_1] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_RESERVED_NUMS_2] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_RESERVED_NUMS_3] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_RESERVED_NUMS_4] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_RESERVED_NUMS_5] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_RESERVED_CHARS] [char](12) NOT NULL DEFAULT (''),
	[QM_RESERVED_CHARS_1] [char](12) NOT NULL DEFAULT (''),
	[QM_RESERVED_CHARS_2] [char](12) NOT NULL DEFAULT (''),
	[QM_CHECK_SUM] [int] NOT NULL DEFAULT ((0)),
	[QM_PROMPT_DISC] [numeric](26, 8) NOT NULL DEFAULT ((0)),
	[QM_TAX_CODE_X] [char](6) NOT NULL DEFAULT (''),
	[QM_TAX_CODE_X_1] [char](6) NOT NULL DEFAULT (''),
	[QM_TAX_CODE_X_2] [char](6) NOT NULL DEFAULT (''),
	[QM_TAX_CODE_X_3] [char](6) NOT NULL DEFAULT (''),
	[QM_CALC_TYPE] [smallint] NOT NULL DEFAULT ((0)),
	[QM_EXT_REF] [char](36) NOT NULL DEFAULT (''),
	[QM_REOPEN_OP] [char](6) NOT NULL DEFAULT (''),
	[QM_LINK_QUOTE] [char](12) NOT NULL DEFAULT (''),
	[QM_REOPEN_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_CAT_OPTION] [char](16) NOT NULL DEFAULT (''),
	[QM_UNIT_ID] [char](10) NOT NULL DEFAULT (''),
	[QM_PROD_BRANCH] [char](6) NOT NULL DEFAULT (''),
	[QM_UID] [int] NOT NULL DEFAULT ((0)),
	[QM_AVAIL_DATE] [smalldatetime] NOT NULL DEFAULT ('1900-01-01'),
	[QM_AVAIL_TIME] [int] NOT NULL DEFAULT ((-1)),
	[oid] [uniqueidentifier] NOT NULL DEFAULT (newid()),
 CONSTRAINT [QMI1_IDSEQ_ORDER] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

