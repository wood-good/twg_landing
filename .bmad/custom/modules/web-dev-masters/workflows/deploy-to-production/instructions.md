# Deploy to Production - Colonel Forge Protocol

<workflow>
<step n="1" goal="Pre-Deployment Checklist"><ask>Tests passing?</ask><ask>Database migrations ready?</ask><ask>Environment variables configured?</ask><ask>Monitoring setup?</ask><template-output>pre_deployment_checklist</template-output></step>
<step n="2" goal="Deployment Strategy Selection"><action>Based on {deployment_target}, recommend strategy</action><ask>Zero-downtime required?</ask><template-output>deployment_strategy</template-output></step>
<step n="3" goal="Execute Deployment"><action>Deploy application</action><action>Run smoke tests</action><action>Monitor metrics</action><template-output>deployment_execution</template-output></step>
<step n="4" goal="Post-Deployment Verification"><action>Check health endpoints</action><action>Verify database connections</action><action>Monitor error rates</action><template-output>post_deployment</template-output></step>
<step n="5" goal="Rollback Plan"><action>Document rollback procedure</action><action>Keep previous version ready</action><template-output>rollback_plan</template-output></step>
</workflow>
