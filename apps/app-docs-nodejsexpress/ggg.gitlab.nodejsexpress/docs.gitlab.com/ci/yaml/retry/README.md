* https://docs.gitlab.com/ee/ci/yaml/README.html#retry

Possible values for when are:

always: Retry on any failure (default).  
unknown_failure: Retry when the failure reason is unknown.  
script_failure: Retry when the script failed.  
api_failure: Retry on API failure.  
stuck_or_timeout_failure: Retry when the job got stuck or timed out.  
runner_system_failure: Retry if there was a runner system failure (e.g. setting up the job failed).  
missing_dependency_failure: Retry if a dependency was missing.  
runner_unsupported: Retry if the runner was unsupported.  
